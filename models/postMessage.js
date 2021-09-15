const mongoose = require('mongoose')

let PostMessage = mongoose.model('PostMessage', {
    title : {type: String},
    message : {type: String},
},'postMessages')

module.exports = {PostMessage}