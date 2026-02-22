// Services Routes
const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET all services (public)
router.get('/', async (req, res) => {
    try {
        const { active } = req.query;
        let query = {};

        if (active !== 'false') {
            query.isActive = true;
        }

        const services = await Service.find(query).sort({ order: 1 });
        res.json({
            status: 'success',
            count: services.length,
            data: services
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET single service
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.json({
            status: 'success',
            data: service
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// GET service by slug
router.get('/slug/:slug', async (req, res) => {
    try {
        const service = await Service.findOne({ slug: req.params.slug });

        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.json({
            status: 'success',
            data: service
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// POST create new service (admin)
router.post('/', async (req, res) => {
    try {
        const { name, slug, icon, shortDescription, fullDescription, order, isActive } = req.body;

        // Validation
        if (!name || !slug || !shortDescription || !fullDescription) {
            return res.status(400).json({
                status: 'error',
                message: 'Name, slug, shortDescription, and fullDescription are required'
            });
        }

        const service = new Service({
            name,
            slug,
            icon: icon || '✨',
            shortDescription,
            fullDescription,
            order: order || 0,
            isActive: isActive !== false
        });

        await service.save();

        res.status(201).json({
            status: 'success',
            message: 'Service created successfully!',
            data: service
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// PUT update service
router.put('/:id', async (req, res) => {
    try {
        const { name, slug, icon, shortDescription, fullDescription, order, isActive } = req.body;

        const service = await Service.findByIdAndUpdate(
            req.params.id,
            { name, slug, icon, shortDescription, fullDescription, order, isActive },
            { new: true, runValidators: true }
        );

        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Service updated successfully',
            data: service
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

// DELETE service
router.delete('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);

        if (!service) {
            return res.status(404).json({
                status: 'error',
                message: 'Service not found'
            });
        }

        res.json({
            status: 'success',
            message: 'Service deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;
