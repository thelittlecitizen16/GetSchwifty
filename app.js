
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '' ];

for(let i = numbers.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
  }


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

AddAllCards();