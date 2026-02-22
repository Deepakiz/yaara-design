// Gallery Model
const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        enum: ['custom-outfits', 'designer-wear', 'costumes', 'styling'],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        trim: true
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
gallerySchema.index({ category: 1, isActive: 1 });
gallerySchema.index({ order: 1 });

module.exports = mongoose.model('Gallery', gallerySchema);
