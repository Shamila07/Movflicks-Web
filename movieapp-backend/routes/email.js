const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Configure the email transport using nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'movflicksproject@gmail.com',
    pass: 'devans2016'
  }
});

app.post('/send-email', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    
    // Define the email options
    const mailOptions = {
        from: email,
        to: 'movflicksproject@gmail.com',
        subject: `New message from ${name}`,
        text: message
    };

    // Send the email using nodemailer
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.log(error);
    return res.status(500).send({message: 'An error occurred while sending the email'});
    }
    console.log('Email sent: ' + info.response);
return res.status(200).send({message: 'The email was sent successfully'});

});


// Start the server on port 8000
app.listen(8000, () => {
console.log('Server started on port 8000');
});
});