function AddNewWin(name, time, boardSize, startDate)
{
    let win = new Win(time, boardSize, startDate);
    let allWinners= JSON.parse(localStorage.getItem('allWinners')) || [];

    if(allWinners.filter(w=>w.name == name).length >0)
     {
       let objIndex = allWinners.findIndex((w=>w.name == name));
       allWinners[objIndex].win.push(win);
     }
     else
     {
        let winner =new Winner(name, [win]);
        winner.win.push(win);
        allWinners.push(winner);
     }
    
    localStorage.setItem('allWinners', JSON.stringify(allWinners));
     let a= JSON.parse(localStorage.getItem('allWinners'));
   console.log(a);
}

class Win{
    constructor(time, boardSize, startDate) {
        this.time = time;
        this.boardSize = boardSize;
        this.startDate = startDate;
      }
}


class Winner{
    constructor(name, win) {
        this.name = name;
        this.win =  [];
      }
}

AddNewWin("aa","bb","aa","bb");