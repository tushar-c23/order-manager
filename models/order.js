const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    CustomerName: String,
    CustomerAddr: String,
    CompletedItems: [{ProductName: String, Qty: Number}],
    PendingItems: [{ProductName: String, Qty: Number}],
    Status:Number,
    isAssigned:Boolean
})

//Status Number contains 1/2/3 3 stages.

module.exports = mongoose.model('Order', OrderSchema);