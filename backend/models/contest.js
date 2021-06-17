const mongoose = require("mongoose");
const User= require("./user");

const contestSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    contestname : { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectID, ref: "User" },
    userName: { type: String, required: true },
    participants:[],
    creationtime: { type: Number},
    isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Contest", contestSchema);