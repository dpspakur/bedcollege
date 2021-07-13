const express = require('express')
const app =express()
const path=require('path')
const user = require('./src/user')
// setting the views folder
app.set('views',path.join(__dirname ,'views'))
// setting the view engine as ejs
app.set('view engine','ejs')
// setting the public folder
app.use(express.static('public'))
// setting routes
app.use('/',user)
const port =process.env.PORT || 4000
app.listen(port,()=>{
    console.log("server started on port 4000")
})