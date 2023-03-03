


class myClass {
    ticket = {}
  
   static  counter = 0

    getticket(date) {
       
        var id = ++myClass.counter;
        this.ticket = {
            id: id,
            flightNum:  Math.floor((Math.random() * 100) + 1),
            seatNum:  Math.floor((Math.random() * 100) + 1),
            departure:  Math.floor((Math.random() * 100) + 1),
            date: date
        }


       
    }
    dispaly() {


        console.log(this.ticket);
        // console.log(this.ticket.flightNum);
        // console.log(this.ticket.seatNum);
        // console.log(this.ticket.date);


    }


    updateTicket(flightNum, seatNum,departure) {
        this.ticket.flightNum = flightNum;
        this.ticket.seatNum = seatNum;
        this.ticket.departure=departure
       //this.dispaly()

    }
}

module.exports = {
    myClass
}