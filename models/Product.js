const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    countStock: {
        type: Number,
        require: true
    },
    image: {
        type: String
    }
}, {timestamps: true})

module.exports = model('product', ProductSchema);
