const express = require('express')
const app = express()

app.use(express.static(__dirname+'/public'))

const date = (req , res , next) => {
    var d = new Date()
    if( (d.getHours() < 15  ) || (d.getHours() > 17) ){
        return res.sendFile(__dirname + "/htmlPages/outOftime.html")
    }
    next()
}



app.get('/home', date, (req, res)=>{
    res.sendFile(__dirname+'/public/home.html')
})
app.get('/ourservices', date, (req, res)=>{
    res.sendFile(__dirname+'/public/ourservices.html')
})
app.get('/contact', date, (req, res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})








app.listen(5000,err=>{
    if (err) {console.log("server is not running")}
    else {console.log("server is running port 5000")}
})