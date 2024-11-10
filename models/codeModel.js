const mongoose = require('mongoose');

const codeSchema = mongoose.Schema({
    html:String,
    css:String,
    javascript:String
},{
    timestamps:true
})

module.exports = mongoose.model("codeModel",codeSchema);
