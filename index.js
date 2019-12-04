var app = require('express')
var cors = require('cors')
var json = require('./students.json')
var port = 8000
app = app()
app.use(cors())


app.get('/students',(req,res)=>{
    res.json(json)
})


app.listen(port,()=>{
    console.log('server runnign at port',port)
    console.log('use http://localhost:8000/students for the api call')
})