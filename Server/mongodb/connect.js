import mongoose from "mongoose";
const connectDB = async (URI) => {
    try {
      mongoose.set("strictQuery", true)
      await mongoose.connect(URI)
                    .then(() => console.log("MongoDB connected"))
                    .catch((err) => console.log(err.message));

    } catch (err) {
        console.error("Error: ", err.message);
    }
};

export default connectDB;