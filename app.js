
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '' ];



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