import mongoose from "mongoose";

const planSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    descripction: String,
    price: {
        type: Number,
        required: true
    },
    durationMonth: {
        type: Number,
        required: true
    }
});



const Plan = mongoose.model('Plan', planSchema);

export default Plan;
