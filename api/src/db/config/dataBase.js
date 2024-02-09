import mongoose from "mongoose";

export const dbs = async () => {
    try {
        await mongoose.connect(process.env.NODE_MONGO);
        console.log('>>> Connect database to cluster');
    } catch (error) {
        console.error(error, 'Error connecting to cluster');
    }
}