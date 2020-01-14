const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({
    id: {
        type: Number
    },
    lei: {
        type: Number
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    privilegePrice: {
        type: Number
    },
    imgUrl: {
        type: String
    },
    details: {
        type: String
    },
    createDate: {
        type: Number

    },
    updateDate: {
        type: Number

    },
    discount: {
        type: String

    },
    buyRate: {
        type: Number
    },
    shopGoodsImageList: {
        type: Array

    }

}, {
    timestamps: true

})
module.exports = mongoose.model('Set', setSchema);