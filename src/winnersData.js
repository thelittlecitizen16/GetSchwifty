function AddNewWin(name, time, boardSize, startDate)
{
    let win = new Win(time, boardSize, startDate);
    let allWinners= JSON.parse(localStorage.getItem('allWinners')) || [];


    if(allWinners.filter(w=>w.name == name).length >0)
     {
         
        let objIndex = allWinners.findIndex((w=>w.name == name));
         if(allWinners[objIndex].win.length<5)
         {
            allWinners[objIndex].win.push(win);
         }
         else
         {
            allWinners[objIndex].win.sort((a, b) => a.time - b.time);
            console.log(time);
            console.log(allWinners[objIndex].win[0].time );

            if(allWinners[objIndex].win[0].time > time)
            {
                allWinners[objIndex].win.splice(0, 1);
                allWinners[objIndex].win.push(win);
            }
         }
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

