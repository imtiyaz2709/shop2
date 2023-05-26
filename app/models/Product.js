import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{type:String},
    price:{type:Number,required:true},
    discount_price:{type:Number},
    brand:{type:String},
    category:{type:mongoose.Schema.Types.ObjectId,ref:"Category"},
    description:{type:String},
    status:{type:Boolean}

},{
    timestamps:true
})

module.exports = mongoose.models.Product || mongoose.model("Product",productSchema)