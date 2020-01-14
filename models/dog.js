const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    id: {
        type: Number
    },
    lei: {
        type: Number
    },
    name: {
        type: String
    },
    ishaveChild: {
        type: Boolean
    },
    shopGoodsImageList: {
        type: Array

    }

}, {
    timestamps: true

})
module.exports = mongoose.model('Dog', dogSchema);