const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navbarSchema = new Schema({
    code: {
        type: String
    },
    message: {
        type: String
    },
    result: {
        type: Array
    }
}, {
    timestamps: true

})
module.exports = mongoose.model('List', navbarSchema);