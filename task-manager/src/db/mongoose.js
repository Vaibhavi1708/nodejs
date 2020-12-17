///home/vaibhavi/mongodb/data/usr/bin/mongod --dbpath=/home/vaibhavi/mongodb-data

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

