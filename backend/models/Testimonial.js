// Testimonial Model
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 5,
        min: 1,
        max: 5
    },
    isActive: {
        type: Boolean,
        default: true
    },
    order: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Index for querying
testimonialSchema.index({ order: 1 });
testimonialSchema.index({ isActive: 1 });

module.exports = mongoose.model('Testimonial', testimonialSchema);
