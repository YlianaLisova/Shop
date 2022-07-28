require('dotenv').config();

const express = require('express');


const app = express();
app.use(express.json);


app.listen(5000, () => {
    console.log('Started on port 5000')
})
