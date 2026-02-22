// Gallery Routes
const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');

// GET all gallery items (public)
router.get('/', async (req, res) => {
    try {
        const { category, active } = req.query;
        let query = {};

        if (category && category !== 'all') {
            query.category = category;
        }

        if (active !== 'false') {
            query.isActive = true;
        }

        const gallery = await Gallery.find(query).sort({ order: 1, createdAt: -1 });
        res.json({
            status: 'success',
            count: gallery.length,
            data: gallery
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET single gallery item
router.get('/:id', async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);

        if (!galleryItem) {
            return res.status(404).json({
                status: 'error',
                message: 'Gallery item not found'
            });
        }

        res.json({
            status: 'success',
            data: galleryItem
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// POST create new gallery item (admin)
router.post('/', async (req, res) => {
    try {
        const { title, category, imageUrl, description, order, isActive } = req.body;

        // Validation
        if (!title || !category || !imageUrl) {
            return res.status(400).json({
                status: 'error',
                message: 'Title, category, and imageUrl are required'
            });
        }

        const galleryItem = new Gallery({
            title,
            category,
            imageUrl,
            description,
            order: order || 0,
            isActive: isActive !== false
        });

        await galleryItem.save();

        res.status(201).json({
            status: 'success',
            message: 'Gallery item created successfully!',
            data: galleryItem
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// PUT update gallery item
router.put('/:id', async (req, res) => {
    try {
        const { title, category, imageUrl, description, order, isActive } = req.body;

        const galleryItem = await Gallery.findByIdAndUpdate(
            req.params.id,
            { title, category, imageUrl, description, order, isActive },
            { new: true, runValidators: true }
        );

        if (!galleryItem) {
            return res.status(404).json({
                status: 'error',
                message: 'Gallery item not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Gallery item updated successfully',
            data: galleryItem
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// DELETE gallery item
router.delete('/:id', async (req, res) => {
    try {
        const galleryItem = await Gallery.findByIdAndDelete(req.params.id);

        if (!galleryItem) {
            return res.status(404).json({
                status: 'error',
                message: 'Gallery item not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Gallery item deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;
