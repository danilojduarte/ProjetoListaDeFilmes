const express = require("express")
const path = require("path")

let initialPath = path.join(__dirname, "project")

let app = express()
app.use(express.static(initialPath))

app.get("/", (req, res)=>{
    res.sendFile(path.join(initialPath, "index.html"))
})

app.listen(3333, ()=>{
    console.log("Server start up!")
})