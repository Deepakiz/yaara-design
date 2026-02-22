// Yaara Design - Backend Server
// Node.js + Express + In-Memory Database

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve static files from frontend and admin
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/admin', express.static(path.join(__dirname, '../admin')));

// Simple JSON-based database
const DB_FILE = path.join(__dirname, 'database.json');

// Initialize database if not exists
if (!fs.existsSync(DB_FILE)) {
    const initialData = {
        services: [
            { id: 1, icon: '👗', title: 'Custom Outfits', description: 'Bespoke clothing designed and stitched exclusively for you', order: 1 },
            { id: 2, icon: '✨', title: 'Designer Wear', description: 'Ready-to-wear collections featuring contemporary elegance', order: 2 },
            { id: 3, icon: '🎭', title: 'Costume Design', description: 'Custom costumes for performances and special occasions', order: 3 },
            { id: 4, icon: '💎', title: 'Personal Styling', description: 'One-on-one consultation to curate your perfect wardrobe', order: 4 }
        ],
        gallery: [
            { id: 1, category: 'outfits', title: 'Custom Outfit 1', image: '' },
            { id: 2, category: 'designer', title: 'Designer Wear 1', image: '' },
            { id: 3, category: 'costumes', title: 'Costume 1', image: '' },
            { id: 4, category: 'outfits', title: 'Custom Outfit 2', image: '' },
            { id: 5, category: 'designer', title: 'Designer Wear 2', image: '' },
            { id: 6, category: 'costumes', title: 'Costume 2', image: '' }
        ],
        testimonials: [
            { id: 1, name: 'Ashvini B.', text: "Absolutely loved my custom outfit! Yaara Design understood exactly what I wanted and delivered beyond my expectations.", stars: 5 },
            { id: 2, name: 'Ashiriya B.', text: "The costume for my dance performance was stunning! Received so many compliments.", stars: 5 },
            { id: 3, name: 'Fazil B.', text: "Such a wonderful experience working with Yaara Design. The personal styling session helped me discover styles I never knew would suit me.", stars: 5 }
        ],
        enquiries: []
    };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
}

// Helper functions to read/write database
function readDB() {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return { services: [], gallery: [], testimonials: [], enquiries: [] };
    }
}

function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// API Routes - Services
app.get('/api/services', (req, res) => {
    const db = readDB();
    res.json({ status: 'success', data: db.services.sort((a, b) => a.order - b.order) });
});

app.post('/api/services', (req, res) => {
    const db = readDB();
    const newService = { ...req.body, id: Date.now() };
    db.services.push(newService);
    writeDB(db);
    res.status(201).json({ status: 'success', data: newService });
});

app.put('/api/services/:id', (req, res) => {
    const db = readDB();
    const index = db.services.findIndex(s => s.id == req.params.id);
    if (index !== -1) {
        db.services[index] = { ...db.services[index], ...req.body };
        writeDB(db);
        res.json({ status: 'success', data: db.services[index] });
    } else {
        res.status(404).json({ status: 'error', message: 'Service not found' });
    }
});

app.delete('/api/services/:id', (req, res) => {
    const db = readDB();
    db.services = db.services.filter(s => s.id != req.params.id);
    writeDB(db);
    res.json({ status: 'success', message: 'Service deleted' });
});

// API Routes - Gallery
app.get('/api/gallery', (req, res) => {
    const db = readDB();
    res.json({ status: 'success', data: db.gallery });
});

app.post('/api/gallery', (req, res) => {
    const db = readDB();
    const newItem = { ...req.body, id: Date.now() };
    db.gallery.push(newItem);
    writeDB(db);
    res.status(201).json({ status: 'success', data: newItem });
});

app.delete('/api/gallery/:id', (req, res) => {
    const db = readDB();
    db.gallery = db.gallery.filter(g => g.id != req.params.id);
    writeDB(db);
    res.json({ status: 'success', message: 'Gallery item deleted' });
});

// API Routes - Testimonials
app.get('/api/testimonials', (req, res) => {
    const db = readDB();
    res.json({ status: 'success', data: db.testimonials });
});

app.post('/api/testimonials', (req, res) => {
    const db = readDB();
    const newTestimonial = { ...req.body, id: Date.now() };
    db.testimonials.push(newTestimonial);
    writeDB(db);
    res.status(201).json({ status: 'success', data: newTestimonial });
});

app.delete('/api/testimonials/:id', (req, res) => {
    const db = readDB();
    db.testimonials = db.testimonials.filter(t => t.id != req.params.id);
    writeDB(db);
    res.json({ status: 'success', message: 'Testimonial deleted' });
});

// API Routes - Enquiries
app.get('/api/enquiries', (req, res) => {
    const db = readDB();
    res.json({ status: 'success', data: db.enquiries });
});

app.post('/api/enquiries', (req, res) => {
    const db = readDB();
    const newEnquiry = {
        ...req.body,
        id: Date.now(),
        createdAt: new Date().toISOString(),
        status: 'new'
    };
    db.enquiries.push(newEnquiry);
    writeDB(db);
    res.status(201).json({ status: 'success', data: newEnquiry, message: 'Enquiry submitted successfully!' });
});

app.put('/api/enquiries/:id', (req, res) => {
    const db = readDB();
    const index = db.enquiries.findIndex(e => e.id == req.params.id);
    if (index !== -1) {
        db.enquiries[index] = { ...db.enquiries[index], ...req.body };
        writeDB(db);
        res.json({ status: 'success', data: db.enquiries[index] });
    } else {
        res.status(404).json({ status: 'error', message: 'Enquiry not found' });
    }
});

app.delete('/api/enquiries/:id', (req, res) => {
    const db = readDB();
    db.enquiries = db.enquiries.filter(e => e.id != req.params.id);
    writeDB(db);
    res.json({ status: 'success', message: 'Enquiry deleted' });
});

// Serve admin for /admin route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin/index.html'));
});

// Serve frontend for all other routes (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'success',
        message: 'Yaara Design API is running',
        database: 'JSON file-based',
        timestamp: new Date().toISOString()
    });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
});

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log('✅ Database: JSON file-based (database.json)');
    console.log(`🚀 Yaara Design server running on http://localhost:${PORT}`);
    console.log(`📱 Frontend: http://localhost:${PORT}`);
    console.log(`⚙️  Admin Panel: http://localhost:${PORT}/admin`);
});

module.exports = app;
