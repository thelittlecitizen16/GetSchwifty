
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
    let count=0;

    numbers.forEach(element => {
        AddCard(element,count);
        count++;

        if (count==boardNumber)
       {
        count=0;
       }
    });
}

function AddCard(number, place) {
    var html = `<div class="col-sm-3 d-flex justify-content-center text-center Card" onclick="MoveNumber(this)">
    <div>
    <p class="place" hidden>${place}</p>
    <p class="number">${number}</p>
    </div>
</div>`

    document.getElementById('board').innerHTML += html;
}

function GetCounter()
{
    let counter = 0;
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

function MoveNumber(card)
{
    //just if it ok can move
    let p =card.getElementsByClassName("number")[0];
    let number = p.innerText;
    let cardPlace=0;
    let place;

    for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
        if( document.getElementsByClassName("number")[index].innerText == number)
        {
             cardPlace =index;
             place=document.getElementsByClassName("place")[index].innerText;
        }
        
    }
   
    for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
        if( document.getElementsByClassName("number")[index].innerText == "")
        {
            if(document.getElementsByClassName("place")[index].innerText == 0)
            {
                console.log("place 1");
                if ((index+1)==cardPlace|| (index-boardNumber)==cardPlace ||(index+boardNumber==cardPlace))
                {
                    document.getElementsByClassName("number")[index].innerHTML = number;
                    p.innerHTML = "";
                }

            }
            else if(document.getElementsByClassName("place")[index].innerText == boardNumber-1)          
            {
                console.log("place 2");
                if ((index-1)==cardPlace || (index-boardNumber)==cardPlace ||(index+boardNumber==cardPlace))
            {
                document.getElementsByClassName("number")[index].innerHTML = number;
                p.innerHTML = "";
            }

            }
            else
            {
                if ((index+1)==cardPlace || (index-1)==cardPlace || (index-boardNumber)==cardPlace ||(index+boardNumber==cardPlace))
                {
                    document.getElementsByClassName("number")[index].innerHTML = number;
                    p.innerHTML = "";
                }
            } 
        }
    }
    IsWinner();
}

function AddColorWhenCorrect(element)
{
    element.classList.add("addColor");
}
function RemoveColor(element)
{
    element.classList.remove("addColor");
}



function IsWinner()
{
    let card = document.getElementsByClassName("Card");
    let count =0;
    for (let index = 0; index < card.length; index++) {
       if(index+1 == card[index].getElementsByClassName("number")[0].innerText)
       {
        count++;
        AddColorWhenCorrect(card[index]);
       }
       else
       {
        RemoveColor(card[index]);
       }
    }

    if(count==card.length-1)
    {
        document.getElementById("Winner").innerHTML="You Win!";
    }

}
