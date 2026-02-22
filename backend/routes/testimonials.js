// Testimonials Routes
const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET all testimonials (public)
router.get('/', async (req, res) => {
    try {
        const { active } = req.query;
        let query = {};

        if (active !== 'false') {
            query.isActive = true;
        }

        const testimonials = await Testimonial.find(query).sort({ order: 1 });
        res.json({
            status: 'success',
            count: testimonials.length,
            data: testimonials
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET single testimonial
router.get('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findById(req.params.id);

        if (!testimonial) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        res.json({
            status: 'success',
            data: testimonial
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// POST create new testimonial (admin)
router.post('/', async (req, res) => {
    try {
        const { name, text, rating, order, isActive } = req.body;

        // Validation
        if (!name || !text) {
            return res.status(400).json({
                status: 'error',
                message: 'Name and text are required'
            });
        }

        const testimonial = new Testimonial({
            name,
            text,
            rating: rating || 5,
            order: order || 0,
            isActive: isActive !== false
        });

        await testimonial.save();

        res.status(201).json({
            status: 'success',
            message: 'Testimonial created successfully!',
            data: testimonial
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// PUT update testimonial
router.put('/:id', async (req, res) => {
    try {
        const { name, text, rating, order, isActive } = req.body;

        const testimonial = await Testimonial.findByIdAndUpdate(
            req.params.id,
            { name, text, rating, order, isActive },
            { new: true, runValidators: true }
        );

        if (!testimonial) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Testimonial updated successfully',
            data: testimonial
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// DELETE testimonial
router.delete('/:id', async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

        if (!testimonial) {
            return res.status(404).json({
                status: 'error',
                message: 'Testimonial not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Testimonial deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;
