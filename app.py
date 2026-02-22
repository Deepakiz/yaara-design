"""
Yaara Design - Python Flask Server
Simple HTTP server to serve the frontend and admin panel
"""
import os
from flask import Flask, send_from_directory, jsonify, request
import json
from datetime import datetime

# Get the directory where app.py is located
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=os.path.join(BASE_DIR, 'frontend'))

# Database file path
DB_FILE = os.path.join(BASE_DIR, 'backend', 'database.json')

# Load database
def load_db():
    if os.path.exists(DB_FILE):
        with open(DB_FILE, 'r') as f:
            return json.load(f)
    return {'services': [], 'gallery': [], 'testimonials': [], 'enquiries': []}

def save_db(data):
    with open(DB_FILE, 'w') as f:
        json.dump(data, f, indent=2)

# API Routes - Services
@app.route('/api/services', methods=['GET'])
def get_services():
    db = load_db()
    services = sorted(db.get('services', []), key=lambda x: x.get('order', 0))
    return jsonify({'status': 'success', 'data': services})

@app.route('/api/services', methods=['POST'])
def add_service():
    db = load_db()
    data = request.json
    new_service = {**data, 'id': int(datetime.now().timestamp() * 1000)}
    db.setdefault('services', []).append(new_service)
    save_db(db)
    return jsonify({'status': 'success', 'data': new_service}), 201

# API Routes - Gallery
@app.route('/api/gallery', methods=['GET'])
def get_gallery():
    db = load_db()
    return jsonify({'status': 'success', 'data': db.get('gallery', [])})

@app.route('/api/gallery', methods=['POST'])
def add_gallery():
    db = load_db()
    data = request.json
    new_item = {**data, 'id': int(datetime.now().timestamp() * 1000)}
    db.setdefault('gallery', []).append(new_item)
    save_db(db)
    return jsonify({'status': 'success', 'data': new_item}), 201

@app.route('/api/gallery/<int:item_id>', methods=['DELETE'])
def delete_gallery(item_id):
    db = load_db()
    db['gallery'] = [g for g in db.get('gallery', []) if g.get('id') != item_id]
    save_db(db)
    return jsonify({'status': 'success', 'message': 'Gallery item deleted'})

# API Routes - Testimonials
@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    db = load_db()
    return jsonify({'status': 'success', 'data': db.get('testimonials', [])})

@app.route('/api/testimonials', methods=['POST'])
def add_testimonial():
    db = load_db()
    data = request.json
    new_testimonial = {**data, 'id': int(datetime.now().timestamp() * 1000)}
    db.setdefault('testimonials', []).append(new_testimonial)
    save_db(db)
    return jsonify({'status': 'success', 'data': new_testimonial}), 201

# API Routes - Enquiries
@app.route('/api/enquiries', methods=['GET'])
def get_enquiries():
    db = load_db()
    return jsonify({'status': 'success', 'data': db.get('enquiries', [])})

@app.route('/api/enquiries', methods=['POST'])
def add_enquiry():
    db = load_db()
    data = request.json
    new_enquiry = {
        **data,
        'id': int(datetime.now().timestamp() * 1000),
        'createdAt': datetime.now().isoformat(),
        'status': 'new'
    }
    db.setdefault('enquiries', []).append(new_enquiry)
    save_db(db)
    return jsonify({'status': 'success', 'data': new_enquiry, 'message': 'Enquiry submitted successfully!'}), 201

@app.route('/api/enquiries/<int:enquiry_id>', methods=['PUT'])
def update_enquiry(enquiry_id):
    db = load_db()
    data = request.json
    for enquiry in db.get('enquiries', []):
        if enquiry.get('id') == enquiry_id:
            enquiry.update(data)
            break
    save_db(db)
    return jsonify({'status': 'success', 'message': 'Enquiry updated'})

@app.route('/api/enquiries/<int:enquiry_id>', methods=['DELETE'])
def delete_enquiry(enquiry_id):
    db = load_db()
    db['enquiries'] = [e for e in db.get('enquiries', []) if e.get('id') != enquiry_id]
    save_db(db)
    return jsonify({'status': 'success', 'message': 'Enquiry deleted'})

# Health Check
@app.route('/api/health')
def health_check():
    return jsonify({
        'status': 'success',
        'message': 'Yaara Design API is running',
        'database': 'JSON file-based',
        'timestamp': datetime.now().isoformat()
    })

# Directories
ADMIN_DIR = os.path.join(BASE_DIR, 'admin')
FRONTEND_DIR = os.path.join(BASE_DIR, 'frontend')

# Serve Admin
@app.route('/admin')
def serve_admin():
    return send_from_directory(ADMIN_DIR, 'index.html')

@app.route('/admin/<path:path>')
def serve_admin_static(path):
    return send_from_directory(ADMIN_DIR, path)

# Serve Frontend (SPA)
@app.route('/')
def serve_frontend():
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/<path:path>')
def serve_frontend_static(path):
    frontend_path = os.path.join(FRONTEND_DIR, path)
    if os.path.exists(frontend_path) and os.path.isfile(frontend_path):
        return send_from_directory(FRONTEND_DIR, path)
    # Fallback to SPA index.html for client-side routing
    return send_from_directory(FRONTEND_DIR, 'index.html')

if __name__ == '__main__':
    print("=" * 50)
    print("🚀 Yaara Design Server")
    print("=" * 50)
    print("📱 Frontend: http://localhost:5000")
    print("⚙️  Admin Panel: http://localhost:5000/admin")
    print("=" * 50)
    app.run(host='0.0.0.0', port=5000, debug=True)
