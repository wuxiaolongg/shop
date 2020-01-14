const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    pageNum: {
        type: Number
    },
    pageSize: {
        type: Number
    },
    size: {
        type: Number
    },
    orderBy: {
        type: Number
    }, startRow: {
        type: Number
    },
    endRow: {
        type: Number

    }, total: {
        type: Number

    }, pages: {
        type: Number

    }, list: {
        type: Array

    }

}, {
    timestamps: true

})
module.exports = mongoose.model('Shop', shopSchema);