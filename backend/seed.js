// Seed script to populate initial data
const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('./models/Service');
const Gallery = require('./models/Gallery');
const Testimonial = require('./models/Testimonial');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yaaradesign';

const services = [
    {
        name: 'Custom Outfits',
        slug: 'custom-outfits',
        icon: '👗',
        shortDescription: 'Bespoke clothing designed and stitched exclusively for you.',
        fullDescription: 'From concept to creation, we design and stitch clothing that\'s uniquely yours. Share your ideas, and we\'ll bring them to life with meticulous attention to every detail. Our custom outfits are perfect for weddings, parties, and special occasions.',
        order: 1,
        isActive: true
    },
    {
        name: 'Designer Wear',
        slug: 'designer-wear',
        icon: '✨',
        shortDescription: 'Ready-to-wear collections featuring contemporary elegance.',
        fullDescription: 'Explore our curated collection of ready-to-wear pieces that embody contemporary elegance. Each piece is crafted with premium materials and impeccable tailoring, perfect for the modern fashion-forward individual.',
        order: 2,
        isActive: true
    },
    {
        name: 'Costume Design',
        slug: 'costume-design',
        icon: '🎭',
        shortDescription: 'Custom costumes for performances and special occasions.',
        fullDescription: 'Stand out with custom costumes designed specifically for your performances, events, or special occasions. We understand the art of creating memorable looks that capture your vision and bring your character to life.',
        order: 3,
        isActive: true
    },
    {
        name: 'Personal Styling',
        slug: 'personal-styling',
        icon: '💎',
        shortDescription: 'One-on-one consultation to curate your perfect wardrobe.',
        fullDescription: 'Let us help you discover your personal style. Our one-on-one consultation sessions are designed to curate a wardrobe that reflects your unique personality, body type, and lifestyle preferences.',
        order: 4,
        isActive: true
    }
];

const galleryItems = [
    {
        title: 'Bridal Lehenga',
        category: 'custom-outfits',
        imageUrl: '/images/gallery/bridal-1.jpg',
        description: 'Custom designed bridal lehenga with intricate embroidery',
        order: 1,
        isActive: true
    },
    {
        title: 'Evening Gown',
        category: 'designer-wear',
        imageUrl: '/images/gallery/evening-1.jpg',
        description: 'Elegant evening gown for special occasions',
        order: 2,
        isActive: true
    },
    {
        title: 'Classical Dance Costume',
        category: 'costumes',
        imageUrl: '/images/gallery/dance-1.jpg',
        description: 'Traditional dance costume with custom designs',
        order: 3,
        isActive: true
    },
    {
        title: 'Designer Saree',
        category: 'custom-outfits',
        imageUrl: '/images/gallery/saree-1.jpg',
        description: 'Handcrafted designer saree with modern twist',
        order: 4,
        isActive: true
    },
    {
        title: 'Cocktail Dress',
        category: 'designer-wear',
        imageUrl: '/images/gallery/cocktail-1.jpg',
        description: 'Chic cocktail dress for party wear',
        order: 5,
        isActive: true
    },
    {
        title: 'Theatrical Costume',
        category: 'costumes',
        imageUrl: '/images/gallery/theatre-1.jpg',
        description: 'Custom theatrical costume design',
        order: 6,
        isActive: true
    }
];

const testimonials = [
    {
        name: 'Ashvini B.',
        text: 'Absolutely loved my custom outfit! Yaara Design understood exactly what I wanted and delivered beyond my expectations. The attention to detail is remarkable.',
        rating: 5,
        order: 1,
        isActive: true
    },
    {
        name: 'Ashiriya B.',
        text: 'The costume for my dance performance was stunning! Received so many compliments. The team was professional and brought my vision to life beautifully.',
        rating: 5,
        order: 2,
        isActive: true
    },
    {
        name: 'Fazil B.',
        text: 'Such a wonderful experience working with Yaara Design. The personal styling session helped me discover styles I never knew would suit me. Highly recommended!',
        rating: 5,
        order: 3,
        isActive: true
    }
];

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await Service.deleteMany({});
        await Gallery.deleteMany({});
        await Testimonial.deleteMany({});
        console.log('🗑️ Cleared existing data');

        // Insert new data
        await Service.insertMany(services);
        console.log('✅ Services seeded');

        await Gallery.insertMany(galleryItems);
        console.log('✅ Gallery items seeded');

        await Testimonial.insertMany(testimonials);
        console.log('✅ Testimonials seeded');

        console.log('🎉 Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding error:', error);
        process.exit(1);
    }
}

seed();
