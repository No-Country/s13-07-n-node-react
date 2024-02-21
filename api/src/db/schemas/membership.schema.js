import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    currentPlan: {
        type: Schema.Types.ObjectId,
        ref: 'Plan', 
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    planHistory: [{
        previousPlan: {
            type: Schema.Types.ObjectId,
            ref: 'Plan' 
        }
    }]
});

const Membership = mongoose.model('Membership', membershipSchema);

export default Membership;
