

const mongoose = require("mongoose");

const upgradeSchema = new mongoose.Schema({
    amount: {
        type: String,
    },

    paymentmethod: {
        type: String,
    },

    type: {
        type: String,
    },
    status:{
        type:String,
        default: "pending"
    },

    image:{
        type: String,
        // required: true
    }
},{timestamps:true})

const Upgrade = mongoose.model("upgrade", upgradeSchema)

module.exports = Upgrade;
