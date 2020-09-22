
let numbers = [];
let boardNumber;
let startDate;
let endDate;

function AddNumbers()
{
    for (let index = 1; index < boardNumber*boardNumber; index++) {
        numbers.push(index);
    }
    numbers.push("");
}

function shuffle(){
    for(let i = numbers.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
      } 
}

function AddCard() {
let place=0;
let state=0;
var html ="";

for (let i = 0; i < boardNumber; i++) {
     html += `<div class="row">`;
    for (let j = 0; j < boardNumber; j++) {
        html+=`<div class="col-sm d-flex justify-content-center text-center Card" onclick="MoveNumber(this)">
        <div>
        <p class="place" hidden>${state}</p>
        <p class="number">${numbers[place]}</p>
        </div>
    </div>`
    place++;
    state++;
    if(state == boardNumber) { state=0;}
    }
    html+=`</div>`;
}
    document.getElementById('board').innerHTML += html;
}


function GetNumberOfInversions()
{
    let counter = 0;
    numbers.forEach(number => {
        for(let i = numbers.indexOf(number) +1 ; i < numbers.length; i++){
            if(number > numbers[i] &&  numbers[i] != "")
            {
                counter++;
            }
          }
    });

    return counter;
}

function CheckIfGameCorrect()
{
    let counter  = GetNumberOfInversions();

    if((boardNumber %2) == 0)
    {
       let place =  Math.floor(numbers.indexOf("") / boardNumber) +1 ;
       if((place+ counter)%2==0)
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

function loadBoard()
{
    a=document.getElementById("boardSize").value;
    boardNumber=parseInt(document.getElementById("boardSize").value);

    AddNumbers();
    shuffle();
    while(!CheckIfGameCorrect())
    {
        console.log("board not ok")
        shuffle();
    }
    
    AddCard();
    startDate = new Date();
    document.getElementById("boardSizeLable").classList.add("hidden");; 
    document.getElementById("boardSize").classList.add("hidden");; 
}


function MoveNumber(card)
{
    let p =card.getElementsByClassName("number")[0];
    let number = p.innerText;
    let cardPlace=0;

    for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
        if( document.getElementsByClassName("number")[index].innerText == number)
        {
             cardPlace =index;
        }   
    }
   
    for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
        let emptyNumber = document.getElementsByClassName("number")[index];
     
        if( emptyNumber.innerHTML == "")
        {
            let emptyPlace=document.getElementsByClassName("place")[index].innerText;

            if(emptyPlace == 0)
            {
                console.log("place 1");
                if ((index+1)==cardPlace|| (index-boardNumber)==cardPlace ||(index+boardNumber)==cardPlace)
                {
                    emptyNumber.innerHTML = number;
                    p.innerHTML = "";
                }
            }
            else if(emptyPlace == boardNumber-1)          
            {
                console.log("place 2");

                if ((index-1)==cardPlace|| (index-boardNumber)==cardPlace ||(index+boardNumber)==cardPlace)
                {
                emptyNumber.innerHTML= number;
                p.innerHTML = "";
                }
            }
            else
            {
                if ((index+1)==cardPlace || (index-1)==cardPlace || (index-boardNumber)==cardPlace ||(index+boardNumber)==cardPlace)
                {
                    emptyNumber .innerHTML= number;
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
       for (let index = 0; index < document.getElementsByClassName("number").length; index++) {
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
        endDate = new Date();
        document.getElementById("Winner").innerHTML="You Win!";
        document.getElementById("name").classList.add("visible");
        document.getElementById("name").classList.remove("hidden");
        document.getElementById("enterWinner").classList.add("visible");
        document.getElementById("enterWinner").classList.remove("hidden");
    }

}

function AddWinner()
{
    let name = document.getElementById("name").value;
    let gameTime=(endDate - startDate) /1000;

    AddNewWin(name,gameTime,boardNumber,startDate.toString());
    location.href = "file:///C:/Users/thelittlecitizen16/Desktop/GetSchwifty/app.html";

}
