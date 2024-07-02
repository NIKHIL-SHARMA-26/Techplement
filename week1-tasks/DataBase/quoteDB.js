const mongoose = require("mongoose")

const connectDB = async ()=>{
   try{
    const connectionString =  await mongoose.connect(`${process.env.MONGO_URI}`,{
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
    console.log(`Database Connected: ${connectionString.connection.host}`);
   }catch(err) {
    throw new Error(`Database connection failed: ${err}`)
   }
}

module.exports = { connectDB }

