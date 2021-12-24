// console.log('Hello shraddha');

const express = require('express');
const app = express()

app.get('/error', function (req, res){
    res.send(500).send('Something went wrong!')
})

app.get('/success', function (req, res){
    res.send(200).send('Hello World!')
})

app.get('/students', function (req, res){
    res.status(200).json({"key": 'Hello students'});
})

app.get('/newton/:filename', function (req, res){
    let filename = req.params.filename;
    console.log("file requested: ", filename);
    res.sendFile(__dirname+ '/public/'+ filename);
})
app.listen(3000);