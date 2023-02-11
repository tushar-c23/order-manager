const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    CustomerName: String,
    CustomerAddr: String,
    Items: [{ProductName: String, Qty: Number, isComplete: Boolean}],
    Status:Number,
    isAssigned:Boolean
})

//Status Number contains 1/2/3 3 stages.

module.exports = mongoose.model('Order', OrderSchema);