const mongoose = require('mongoose');

const url = "mongodb+srv://farihafirozkhan:fariha123@cluster0.dm5tlje.mongodb.net/?retryWrites=true&w=majority"

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;