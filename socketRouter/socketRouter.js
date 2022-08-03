const express = require('express')

const SocketRouter = (io) => {
    const router = express.Router()
    router.get('/detail-order', (req, res) => {
        const data = req.query.data
        if (!data){
            res.send('data is required')
        }
        io.emit('detail', data)
        res.send('data success')
    })
    return router
}

module.exports = SocketRouter