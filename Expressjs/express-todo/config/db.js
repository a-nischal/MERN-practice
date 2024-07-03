const mongoose = require("mongoose");
const connectDb = async () => {
   try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("MongoDb connected")
    
   } catch (error) {
    console.log(error);
    
   }
}
module.exports = connectDb;
