
let numbers = [];
let boardNumber = 2;
for (let index = 1; index < boardNumber*boardNumber; index++) {
    numbers.push(index);
}
numbers.push("");


function shuffle(){
    for(let i = numbers.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = numbers[i]
        numbers[i] = numbers[j]
        numbers[j] = temp
      } 
}
//let boardNumbers = numbers;

function AddAllCards(){
    //document.getElementById('topbar').innerHTML = "";
    let count=0;

    // numbers.forEach(element => {
    //     AddCard(element,count,numberplace);
    //     count++;
    //      numberplace=false;

    //     if (count==boardNumber)
    //    {
    //     count=0;
    //    }
    // });
    AddCard();
}

function AddCard() {
//     let size =  Math.floor(12/boardNumber);
//     var html = `<div class="col-sm-${size} d-flex justify-content-center text-center Card" onclick="MoveNumber(this)">
//     <div>
//     <p class="place" hidden>${place}</p>
//     <p class="number">${number}</p>
//     </div>
// </div>`

//     document.getElementById('board').innerHTML += html;

let place=0;
var html ="";
for (let i = 0; i < boardNumber; i++) {
     html += `<div class="row">`;
    for (let j = 0; j < boardNumber; j++) {
        html+=`<div class="col-sm d-flex justify-content-center text-center Card" onclick="MoveNumber(this)">
        <div>
        <p class="place" hidden>${place}</p>
        <p class="number">${numbers[place]}</p>
        </div>
    </div>`
    place++;
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


shuffle();
while(!CheckIfGameCorrect())
{
    console.log("board not ok")
    shuffle();
}

AddAllCards();

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
                if ((index+1)==cardPlace|| (index-boardNumber)==cardPlace ||(index+boardNumber==cardPlace))
                {
                    emptyNumber.innerHTML = number;
                    p.innerHTML = "";
                }
            }
            else if(emptyPlace == boardNumber-1)          
            {
                console.log("place 2");
                if ((index-1)==cardPlace || (index-boardNumber)==cardPlace ||(index+boardNumber==cardPlace))
            {
                emptyNumber.innerHTML= number;
                p.innerHTML = "";
            }
            }
            else
            {
                if ((index+1)==cardPlace || (index-1)==cardPlace || (index-boardNumber)==cardPlace ||(index+boardNumber==cardPlace))
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
        document.getElementById("Winner").innerHTML="You Win!";
    }

}
