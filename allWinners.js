function getAllWinners()
{
    for (let index = 0; index < document.getElementsByClassName("hidden").length; index++) {
        document.getElementsByClassName("hidden")[index].classList.add("visible");;  
    }
    
    let allWinners =JSON.parse(localStorage.getItem('allWinners'));
    let name =document.getElementById("name").value;

    for (let index = 0; index < allWinners.filter(w=>w.name == name)[0].win.length; index++) {
    let player=allWinners.filter(w=>w.name == name)[0];

    let html=`<tr>
     <th>${player.name}</th>
     <th>${player.win[index].time}</th>
     <th>${player.win[index].boardSize}</th>
     <th>${player.win[index].startDate}</th>
     </tr>`

     document.getElementById("data").innerHTML += html;   
    }
}