const Express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require("body-parser");
const Cors = require("cors");
const Nodemailer = require('nodemailer')
require("dotenv").config();

const app = Express();

app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
app.use(Cors());
app.use(Express.json());

Mongoose.connect("mongodb+srv://vaisakh1996v:1996@otp.bxo82wy.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true});


const OTPSchema = new Mongoose.Schema({
    email: String,
    
    otp: String,
  });
  
  
  const OTP = Mongoose.model('OTP', OTPSchema);
  
  const transporter = Nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user:'vaisakh1996v@gmail.com',
      pass:'ltdzknwggigvpdvd',
    },
  });
  
  app.post('send-otp', (req, res) => {
    const { email } = req.body;
  
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
    const mailOptions = {
      from: 'vaisakh1996v@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is ${otp}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to send OTP' });
      } else {
        const newOTP = new OTP({
          email,
          otp,
        });
  
        newOTP.save();
  
        res.json({ message: 'OTP sent successfully' });
      }
    });
  });
  
  app.post('/verify-otp', async (req, res) => {
      const { email, otp } = req.body;
    
      try {
        const result = await OTP.findOne({ email, otp });
    
        if (result) {
          res.json({ message: 'OTP verified successfully' });
        } else {
          res.status(400).json({ error: 'Invalid OTP' });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to verify OTP' });
      }
    });
    

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}.....................`);
});