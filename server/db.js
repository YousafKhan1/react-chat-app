const mongoose = require('mongoose')
function Connection() {
    const mongoURI = "mongodb://127.0.0.1:27017/chat"
    mongoose.connect(mongoURI)
    .then(() => console.log("connected"))
    .catch(err => console.log(err))
}

module.exports = Connection