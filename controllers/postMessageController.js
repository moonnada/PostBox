const express = require('express')
let router = express.Router()

let { PostMessage } = require('../models/postMessage')

router.get('/', (req, res) => {
    PostMessage.find((err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined,2))
    })
})


module.exports = router