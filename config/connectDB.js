const mongoose = require('mongoose')

const connectDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected.')
        return;
    }
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) throw err;
        console.log('Connected to mongodb.')
    })
}

export default connectDB