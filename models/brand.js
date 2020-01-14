const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    code: {
        type: String
    },
    message: {
        type: String
    },
    result: {
        type: Object
    }
}, {
    timestamps: true

})
module.exports = mongoose.model('Brand', brandSchema);