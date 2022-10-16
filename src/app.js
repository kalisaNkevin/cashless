import express from 'express';
import cors from 'cors';
import routes from './routes.js';
import twilio from 'twilio';

var accountSid = process.env.Account_SID;
var authtoken = process.env.Auth_Token;

const client = twilio(accountSid, authtoken, {
    lazyLoading: true
}); 
 
await client.messages.create({ 
         to: '+250 786 738 464',  
         from: process.env.My_number,      
         body: ' Mr Armel  ' ,
       }); 

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

export default app;
