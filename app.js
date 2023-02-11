const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Order = require('./models/order');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/order-manager');

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open", () => {
    console.log("Database Connected");
})

const port = 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    // res.send("HEllo!")
    res.render('home')
})

// app.get('/makeorder', async (req,res) => {
//     const newOrder = new Order({
//     CustomerName: "Tushar",
//     CustomerAddr: "Tushar",
//     CompletedItems: [{ProductName: "Aloo", Qty: 5}],
//     PendingItems: [{ProductName: "Onion", Qty: 10}],
//     Status: 1
//     });
//     await newOrder.save();
//     res.send(newOrder);
// })

app.get('/owner', async (req, res) => {
    const orders = await Order.find({});
    res.render('owner/owner', {orders});
})


app.get('/owner/new', async(req, res) => {
    res.render('owner/newOrder');
})

//waiting for form
app.post('/owner/newOrder', async(req,res) => {
    res.send(req.body);
    req.body.Status = 1;
})


app.get('/worker', async (req,res) => {
    const orders = await Order.find({})
})

app.post('/worker', async(req, res) => {
    // req.body.Order
})

app.get('/manager', async(req, res) => {
    const orders = await Order.find({});
    res.render('manager/manager', {orders});
})

app.post('/manager', async(req, res) => {
    
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
