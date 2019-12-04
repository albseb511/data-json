var app = require('express')()
var cors = require('cors')
var json = require('./students.json')
var port = 8000
app.use(cors())


app.get('/students',(req,res)=>{
    res.json(json)
})


app.listen(port)