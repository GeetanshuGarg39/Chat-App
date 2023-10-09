import mongoose from "mongoose";

const ConnectDB = async (MONGO_URL) => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected Successfully");
        
    } catch (err) {
        console.log("Error while connecting to database",err.message);
    }
}

export default ConnectDB;