const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.post('/fetchTicket', (req, res, next) => {
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
        res.send(requestedTicket);
    });
});

module.exports = router;