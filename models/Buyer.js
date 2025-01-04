const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    wallet: {
        type: Number,
        required: true,
        default: 5000
    },
    meals: [{
        day: {
            type: String,
            required: true
        },
        breakfast: {
            type: Boolean,
            default: false
        },
        lunch: {
            type: Boolean,
            default: false
        },
        dinner: {
            type: Boolean,
            default: false
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Buyer', buyerSchema); 