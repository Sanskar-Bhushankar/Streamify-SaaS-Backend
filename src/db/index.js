import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDBconnected on port ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log("Error Found", error);
        process.exit(1) //This code indicates a failure or error in the process. By convention, 1 is used to signal a general erro
    }
}

export {connectDB};

// import mongoose from "mongoose";
// import {DB_NAME} from "../constants.js";

// const connectDB =async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connnected !! DB HOST: ${connectionInstance.connection.host}`)
//     }catch(error){
//         console.log("Mongo connect error",error);
//         process.exit(1)
//     }
// }

// export {connectDB}