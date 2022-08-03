const express = require('express')
const app = express()
const port = 3000

const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors : {
        origin : '*'
    }
})

const SocketRouter = require('./socketRouter/socketRouter')(io)
app.use(SocketRouter)
app.set(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on("connected", (socket) => {
    console.log("connected")
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`))