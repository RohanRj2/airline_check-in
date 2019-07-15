const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.post('/fetchTicket', (req, res, next) => {
    const { confirmationNumber } = req.body;
    res.setHeader('content-type', 'application/json');
    if (!confirmationNumber) {
        return res.send(
            {
                error: "Please Enter Confirmation Number",
                statusCode: 400
            }
        );
    }
    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            return res.send({
                error:"Server Stubborn!! Please try after somtime.",
                statusCode: 500
            });
        }
        const { tickets } = JSON.parse(data);
        const requestedTicket = tickets.find(ticket => ticket.confirmationNumber === confirmationNumber);
        if (!requestedTicket) {
            return res.send({error:"Confirmation Number not found",statusCode: 404});
        }
        
        res.send(requestedTicket);
    });
});

router.post('/checkConfirmation', (req, res, next) => {
    const { confirmationNumber, lastName } = req.body;
    res.setHeader('content-type', 'application/json');
    if (!confirmationNumber || !lastName) {
        return res.send(
            {
                error: "Please Enter Confirmation Number or Last Name",
                statusCode: 400
            }
        );
    }
    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            return res.send({
                error:"Server Stubborn!! Please try after somtime.",
                statusCode: 500
            });
        }
        const { tickets } = JSON.parse(data);
        const requestedTicket = tickets.find(ticket => ticket.confirmationNumber === confirmationNumber);
        if (!requestedTicket) {
            return res.send({error:"Confirmation Number or Lastname not found",statusCode: 404});
        }
        const isUserValid = requestedTicket.lastNames.includes(lastName);
        if (!isUserValid) {
            return res.send({error:"Confirmation Number or Lastname not found",statusCode: 404});
        }
        res.send({
            isConfirmationAvailable: true
        });
    });
});

router.post('/submitCheckin', (req, res, next) => {
    const { confirmationNumber, checkedInSeats} = req.body;
    res.setHeader('content-type', 'application/json');
    if (!confirmationNumber) {
        return res.send(
            {
                error: "Please Enter Confirmation Number",
                statusCode: 400
            }
        );
    }
    fs.readFile(path.join(__dirname, 'db.json'), (err, data) => {
        if (err) {
            return res.send({
                error:"Server Stubborn!! Please try after somtime.",
                statusCode: 500
            });
        }
        const newData = {...JSON.parse(data)};
        const requestedTicket = newData.tickets.find(ticket => ticket.confirmationNumber === confirmationNumber);
        const requestTicketIndex = newData.tickets.findIndex(ticket => ticket.confirmationNumber === confirmationNumber);
        if (!requestedTicket) {
            return res.send({error:"Confirmation Number not found",statusCode: 404});
        }
        const passengers = [...requestedTicket.passengers];
        var lastnames = [...requestedTicket.lastNames];
        passengers.forEach(passenger => {
            if(checkedInSeats.indexOf(passenger.SeatNumber)>=0 && !passenger.checkedIn) {
                const newLastNames = [...lastnames];
                passenger.checkedIn = true;
                lastnames = newLastNames.filter(lastname => lastname !== passenger.name.split(' ')[1]);
            }
        });

        newData.tickets[requestTicketIndex].lastNames = lastnames;
        newData.tickets[requestTicketIndex].passengers = passengers;

        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(newData), err => {
            if(!err) {
                res.send({"isConfirmationSuccess": true});
            }
        });


    });
});

module.exports = router;