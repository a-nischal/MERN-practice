const mongoose = require("mongoose");
const connectDb = async () => {
   try {
    await mongoose.connect("mongodb://localhost:27017/Todo")
    console.log("MongoDb connected")
    
   } catch (error) {
    console.log(error);
    
   }
}
module.exports = connectDb;
