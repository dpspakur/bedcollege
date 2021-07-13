const express = require('express')
const router = express.Router()


router.get('/',function(req,res){
    res.render('index')
})
router.get('/recog',function(req,res){
    res.render('recog')
})
router.get('/contact',function(req,res){
    res.render('contact')
})
router.get('/academics',function(req,res){
    res.render('academics')
})
router.get('/message',function(req,res){
    res.render('cmsg')
})
router.get('/gallery',function(req,res){
    res.render('gallery')
})
router.get('/admission',function(req,res){
    res.render('admission')
})
module.exports = router