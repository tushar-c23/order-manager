const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Order = require('./models/order');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const session = require('express-session');
const flash = require('connect-flash');

const userRoutes = require('./routes/user');

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

app.use(session({secret: 'secret'}));
app.use(require('flash')());
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
app.use(flash());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', userRoutes);

app.get('/', (req, res) => {
    // res.send("HEllo!")
    res.render('landingPage');
})

app.get('/fake', async(req, res) => {
    const user = new User({username:'tush'});
    const newUser = await User.register(user, 'hello');
    res.send(newUser);
})

app.get('/makeorder', async (req,res) => {
    const newOrder = new Order({
    CustomerName: "Tushar",
    CustomerAddr: "Tushar",
    CompletedItems: [{ProductName: "Aloo", Qty: 5}],
    PendingItems: [{ProductName: "Onion", Qty: 10},{ProductName: "Gobhi", Qty:4}],
    Status: 2,
    WorkerId: 1
    });
    await newOrder.save();
    res.send(newOrder);
})

app.get('/owner', async (req, res) => {
    const orders = await Order.find({});
    res.render('owner/owner', {orders});
})


app.get('/owner/new', async(req, res) => {
    res.render('owner/newOrder');
})

//waiting for form
app.post('/owner/neworder', async(req,res) => {
    res.send(req.body);
    req.body.Status = 1;
})


app.get('/worker', async (req,res) => {
    const orders = await Order.find({})
    const currId = 1;
    res.render('worker/worker', {orders, currId});
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
