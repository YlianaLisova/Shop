const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(process.cwd(), 'environments', `${process.env.MODE}.env`)})
const app = express();
app.use(express.json());

const {PORT, MONGO_URL} = require("./constants/constants");
const {productRouter} = require("./routes");


app.use("/api/products", productRouter);

mongoose.connect(MONGO_URL)
    .then(() => console.log('Connection is successful'))
    .catch((err) => console.log(err));

app.use((err, req, res, next) => {
        console.log(err);
        res
            .status(err.status || 500)
            .json({
                error: err.message || 'Unknown error',
                code: err.status || 500
            })
    }
)

app.listen(PORT, () => {
    console.log(`Started on port ${PORT}`)
})
