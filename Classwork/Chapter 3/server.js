//import the express dependency
import express from 'express';


const app = express();

//Set static Folder
app.use(express.static('public'));

//Parse a URL-encoded bodies(as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

//Parse JSON bodies(as sent by API Clients)
app.use(express.json());

//
let currentPrice = 60;

app.get('/get-price',(req,res)=>{
    currentPrice = currentPrice + Math.random() * 2 - 1;
    res.send('$' + currentPrice.toFixed(1))
    })

//Start Server
app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

