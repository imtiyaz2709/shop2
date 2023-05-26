import { NextResponse } from "next/server"
import Product from "@/app/models/Product"
import dbConn from "@/app/utils/dbConn"
dbConn()

export async function GET(req,{params}){
    let {catid} = params;
    let getData;
    if(catid){
        getData = await Product.populate(await Product.find({category:catid}), {
            path:"category"
        })
    }
    return NextResponse.json({getData})
}