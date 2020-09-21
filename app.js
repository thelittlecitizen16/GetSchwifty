
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
    var html = `<div class="col-sm-3 d-flex justify-content-center text-center Card" onclick="MoveNumber(this)">
    <div>
    <p class="number">${number}</p>
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

// while(!CheckIfGameCorrect())
// {
//     console.log("board not ok")
//     shuffle();
// }
if(!CheckIfGameCorrect())
{
    console.log("board not ok")
}

AddAllCards();

function MoveNumber(card)
{
    //just if it ok can move
    let p =card.querySelectorAll("p")[0];
    let number = p.innerText;
    let cardPlace=0;
    for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
        if( document.getElementsByClassName("number")[index].innerText == number)
        {
             cardPlace =index;
        }
        
    }
   
    for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
        console.log(document.getElementsByClassName("number")[index].innerText);
        if( document.getElementsByClassName("number")[index].innerText == "")
        {
            console.log("enter");
            console.log(index+" "+cardPlace);
            if(index%3==0)
            {
                if ((index+1)==cardPlace|| (index-3)==cardPlace ||(index+3==cardPlace))
                {
                    console.log("enter 2")
                    document.getElementsByClassName("number")[index].innerHTML = number;
                    p.innerHTML = "";
                }

            }
            else if(index+1%3==0)
            {
                if ((index-1)==cardPlace || (index-3)==cardPlace ||(index+3==cardPlace))
            {
                console.log("enter 2")
                document.getElementsByClassName("number")[index].innerHTML = number;
                p.innerHTML = "";
            }

            }
            else
            {
                if ((index+1)==cardPlace || (index-1)==cardPlace || (index-3)==cardPlace ||(index+3==cardPlace))
                {
                    console.log("enter 2")
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
        console.log("winner");
    }

}
