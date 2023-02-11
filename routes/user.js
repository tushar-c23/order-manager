const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.post('/register', async (req, res) => {
    const {username,password, type} = req.body;
    const user = new User({username, type});
    const registeredUser = await User.register(user,password);
    // console.log(registeredUser);
    res.redirect('/');
})

router.get('/login', async (req,res) => {
    res.render('users/login');
})

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect:'/login'}) ,async(req,res) => {
    req.flash('success','welcome back');
    res.redirect('/');
})

module.exports = router;