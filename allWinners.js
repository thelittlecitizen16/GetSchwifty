function getAllWinners()
{
    for (let index = 0; index < document.getElementsByClassName("hidden").length; index++) {
        document.getElementsByClassName("hidden")[index].classList.add("visible");;  
    }

let allWinners =JSON.parse(localStorage.getItem('allWinners'));
console.log(allWinners);
let name =document.getElementById("name").value;
console.log(allWinners.filter(w=>w.name == name)[0].win);

for (let index = 0; index < allWinners.filter(w=>w.name == name)[0].win.length; index++) {
    let html=`<tr>
<th>${allWinners.filter(w=>w.name == name)[0].win[index].time}</th>
<th>${allWinners.filter(w=>w.name == name)[0].win[index].boardSize}</th>
<th>${allWinners.filter(w=>w.name == name)[0].win[index].startDate}</th>
</tr>`

document.getElementById("data").innerHTML += html;   
}
}