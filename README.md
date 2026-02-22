# Yaara Design - Fashion Brand Website

A modern, mobile-first professional website for "Yaara Design" - a custom fashion and costume designer brand.

## 🌐 Live Website

**Frontend**: https://yaara-design.onrender.com  
**Admin Panel**: https://yaara-design.onrender.com/admin

## Features

- **Home Page** - Hero with "Custom Fashion Made With Love", services preview
- **About Section** - Brand story and philosophy
- **Services** - Custom Outfits, Designer Wear, Costume Design, Personal Styling
- **Gallery** - Portfolio grid with category filters
- **Contact Form** - Enquiry submission with validation
- **Admin Panel** - Manage services, gallery, testimonials, enquiries
- **Mobile Responsive** - Works on all devices

## Design

- **Color Palette**: Soft neutral cream/beige (#F5F0EB, #D4A574)
- **Typography**: Cormorant Garamond (headings) + Jost (body)
- **Style**: Minimal luxury, fashion editorial look

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript (vanilla)
- **Backend**: Python Flask
- **Database**: JSON file-based

## Local Development

### Prerequisites
- Python 3.10+
- Flask

### Installation

```
bash
cd p1
pip install -r requirements.txt
python app.py
```

The server will start at http://localhost:5000

## Deployment to Render.com (Free)

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push this `p1` folder to GitHub

2. **Deploy on Render**
   - Go to https://dashboard.render.com
   - Create a new "Web Service"
   - Connect your GitHub repository
   - Use these settings:
     - Build Command: `pip install -r requirements.txt`
     - Start Command: `python app.py`
   - Click "Deploy"

3. **Get Your URL**
   - After deployment, you'll get a URL like: `https://your-app.onrender.com`

## Project Structure

```
p1/
├── app.py              # Flask server
├── requirements.txt    # Python dependencies
├── render.yaml         # Render deployment config
├── frontend/
│   └── index.html      # Main website
├── admin/
│   └── index.html      # Admin panel
└── backend/
    ├── database.json   # Data storage
    └── seed.js        # Sample data
```

## Contact

- Instagram: @yaaraadesigns
- WhatsApp: +91 8015671607

## License

© Yaara Design. All rights reserved.
