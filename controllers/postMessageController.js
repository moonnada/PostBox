const express = require('express')
let router = express.Router()

let ObjectID = require('mongoose').Types.ObjectId
let { PostMessage } = require('../models/postMessage')

//GET a DATA
router.get('/', (req, res) => {
    PostMessage.find((err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined,2))
    })
})

//POST a DATA
router.post('/', (req,res) => {
    let newRecord = new PostMessage({
        title: req.body.title,
        message: req.body.message
    })
    newRecord.save((err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined,2))
    })
})

//UPDATE a DATA
router.put('/:id', (req,res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    let updatedRecord = {
        title: req.body.title,
        message: req.body.message
    }

    PostMessage.findByIdAndUpdate(req.params.id, {$set:updatedRecord}, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while updating all records : ' + JSON.stringify(err, undefined,2))
    })
})

//DELETE a data
router.delete('/:id', (req,res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('No record with given id : ' + req.params.id)

    PostMessage.findByIdAndDelete(req.params.id, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('Error while deleting all records : ' + JSON.stringify(err, undefined,2))
    })
})

module.exports = router