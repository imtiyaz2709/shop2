import dbConn from "@/app/utils/dbConn";
import { NextResponse } from "next/server";
import User from "@/app/models/User"


dbConn();
export async function GET(req,{params}){
    let data;
    let {userid} = params
   try{
        data = (!userid)? await User.find():await User.findById(userid)
   }
   catch(e){
    return NextResponse.json({"msg":e.message})
   }
   return NextResponse.json({data})
}

export async function POST(req,{params}){
    let data;
    let {userid} = params
    let record = await req.json()
    try{
        data = (!userid) && await User.create(record)
    }
    catch(e){
        return NextResponse.json({"msg":"data not submitted"})
    }
    return NextResponse.json({data})
}