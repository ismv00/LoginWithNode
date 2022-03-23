const mongoose = require('mongoose');
require('dotenv').config();

const {
    DB_USER,
    DB_PASS
} = process.env;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@nodelogin.7dwic.mongodb.net/loginWithNode?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

module.exports = mongoose;