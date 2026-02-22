// Enquiries Routes
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// GET all enquiries (for admin)
router.get('/', async (req, res) => {
    try {
        const { status } = req.query;
        let query = {};

        if (status && status !== 'all') {
            query.status = status;
        }

        const enquiries = await Enquiry.find(query).sort({ createdAt: -1 });
        res.json({
            status: 'success',
            count: enquiries.length,
            data: enquiries
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET single enquiry
router.get('/:id', async (req, res) => {
    try {
        const enquiry = await Enquiry.findById(req.params.id);

        if (!enquiry) {
            return res.status(404).json({
                status: 'error',
                message: 'Enquiry not found'
            });
        }

        res.json({
            status: 'success',
            data: enquiry
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// POST create new enquiry (public)
router.post('/', async (req, res) => {
    try {
        const { name, phone, email, service, message } = req.body;

        // Validation
        if (!name || !phone || !message) {
            return res.status(400).json({
                status: 'error',
                message: 'Name, phone, and message are required'
            });
        }

        const enquiry = new Enquiry({
            name,
            phone,
            email,
            service: service || 'other',
            message
        });

        await enquiry.save();

        res.status(201).json({
            status: 'success',
            message: 'Enquiry submitted successfully!',
            data: enquiry
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// PUT update enquiry status
router.put('/:id', async (req, res) => {
    try {
        const { status, notes } = req.body;

        const enquiry = await Enquiry.findByIdAndUpdate(
            req.params.id,
            { status, notes },
            { new: true, runValidators: true }
        );

        if (!enquiry) {
            return res.status(404).json({
                status: 'error',
                message: 'Enquiry not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Enquiry updated successfully',
            data: enquiry
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// DELETE enquiry
router.delete('/:id', async (req, res) => {
    try {
        const enquiry = await Enquiry.findByIdAndDelete(req.params.id);

        if (!enquiry) {
            return res.status(404).json({
                status: 'error',
                message: 'Enquiry not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Enquiry deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET enquiry stats (for admin dashboard)
router.get('/stats/summary', async (req, res) => {
    try {
        const total = await Enquiry.countDocuments();
        const newCount = await Enquiry.countDocuments({ status: 'new' });
        const contactedCount = await Enquiry.countDocuments({ status: 'contacted' });
        const completedCount = await Enquiry.countDocuments({ status: 'completed' });

        res.json({
            status: 'success',
            data: {
                total,
                new: newCount,
                contacted: contactedCount,
                completed: completedCount
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;
