const express = require('express');
const sendMail = require('./mail.js')
const app = express();
const path = require('path');

const PORT = 3000;

//DATA  PARSING
app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());
app.post('/email', (req,res)=> {
    //TODO
    //SEND EMAIL HERE
    const { subject,email, tetx} = req.body;
    console.log('Data: ',req.body);
    sendMail(email, subject, text, function(err, data){
        if (err) {
            res.status(500).json({ message : 'Internal Error'});
        } else {
            res.json({ message: 'Email sent!!!'});
        }
    });
    
});


app.listen();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','index.html'));
})

app.listen(PORT, () => {
    console.log('Server is up on PORT -', PORT);  
})

 