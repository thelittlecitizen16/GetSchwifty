
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '' ];
let boardNumber =3;

function shuffle(){
    for(let i = numbers.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
      } 
}
let boardNumbers = numbers;

function AddAllCards(){
    document.getElementById('board').innerHTML = "";
    numbers.forEach(element => {
        AddCard(element);
    });
}

function AddCard(number) {
    var html = `<div class="col-sm-3 border d-flex justify-content-center text-center Card">
    <div>
    <p class="title">${number}</p>
    </div>
</div>`

    document.getElementById('board').innerHTML += html;
}

function GetCounter()
{
    let counter =0;
    boardNumbers.forEach(number => {
        for(let i = boardNumbers.indexOf(number) +1 ; i < boardNumbers.length; i++){
            if(number > boardNumbers[i] &&  boardNumbers[i] != "")
            {
                counter++;
            }
          }
    });

    return counter;
}

function CheckIfGameCorrect()
{
    let counter  = GetCounter();

    if(boardNumber %2 == 0)
    {
       let place =  numbers.indexOf("") / boardNumber +1 ;
       if(place+ counter%2==0)
        {
           return true;
        }
        return false;
    } 
    else
    {
        if(counter%2==0)
        {
            return true;
        }
        return false;
    } 
}


shuffle();

while(!CheckIfGameCorrect())
{
    console.log("board not ok")
    shuffle();
}

AddAllCards();