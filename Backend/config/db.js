import mongoose from "mongoose"

const connectDB=async()=>{
  
        await mongoose.connect("mongodb+srv://coutinhorobin1425:robinS14coutinho@cluster0.lr2bc.mongodb.net/e-bookstore").then(()=>{
            console.log("Connected to DB")
      
       
        
        })
}

export default connectDB;