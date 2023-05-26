import dbConn from "@/app/utils/dbConn";
import { NextResponse } from "next/server";
import Category from '@/app/models/Category'

dbConn();

export async function GET(req,{params}){
    let {catid} = params;
    let callingData;
    if(catid == "all"){
        callingData = await Category.find()
    }
    else{
        callingData = await Category.findById(catid)
    }
    return NextResponse.json({callingData})
}

export async function POST(req, {params}){
    let {catid} = params;
    let data;
    if (catid == "insert") {
        data = await req.json()
        data = await Category.create(data)
        return NextResponse.json({data})
    }
}

export async function DELETE(req, {params}){
    let data 
    try{
        data = await Category.findByIdAndDelete(params.catid)
        return NextResponse.json({data})
    }
    catch(error){
        return NextResponse.json({"msg":error.message}) 
    }
}
