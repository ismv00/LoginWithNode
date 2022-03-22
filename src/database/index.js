const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ismv00:Igor2502@nodelogin.7dwic.mongodb.net/loginWithNode?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;