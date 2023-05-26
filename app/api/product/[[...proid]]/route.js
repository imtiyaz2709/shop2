import { NextResponse } from "next/server";
import Product from "@/app/models/Product"
import dbConn from "@/app/utils/dbConn";

dbConn() //db connection online

export async function GET(req,{params}){
    let {proid} = params;
    let getData;
    if(!proid){
        getData = await Product.populate(await Product.find(), {
            path:"category"
        })
    }
    else{
        getData = await Product.populate(await Product.findById(proid),{
            path:"category"
        })
    }
    return NextResponse.json({getData})
}

export async function POST(req,{params}){
    let {proid} = params;
    let postData;
    let record = await req.json()
    if(!proid){
        postData  = await Product.create(record)
    }
    return NextResponse.json({record})
}

export async function DELETE(res,{params}){
    let data
    try{
        data = await Product.findByIdAndDelete(params.proid)
        return NextResponse.json({data})
    }
    catch(error){
        return NextResponse.json({"msg":error.message})
    }
}