import mongoose from "mongoose";

const dbConn = (req)=>{
    if(mongoose.connection.readyState){
        return mongoose.connection
    }
    return mongoose.connect(process.env.MONGO_URI)
}

export default dbConn
