import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    pass:{type:String},
},{
    timestamps:true
})

module.exports = mongoose.models.User || mongoose.model("User",UserSchema)