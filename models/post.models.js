const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    desc: String
}, {
    timestamps: true
})

module.exports = mongoose.models.post || mongoose.model('post', postSchema)