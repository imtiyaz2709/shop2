import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    title:{type:String}
},{
    timestamps:true
})

module.exports = mongoose.models.Category || mongoose.model("Category",categorySchema)