# Yaara Design - Complete Guide

## Live Website

- **Frontend**: <https://yaara-design-3.onrender.com>
- **Admin Panel**: <https://yaara-design-3.onrender.com/admin>

---

## How to Manage Content

### 1. Adding/Editing Services

1. Go to: <https://yaara-design-3.onrender.com/admin>
2. Click **Services** in the sidebar
3. To **Add New Service**:
   - Click "+ Add New Service" button
   - Fill in the form:
     - **Name**: Service name (e.g., "Custom Outfits")
     - **Slug**: URL-friendly version (e.g., "custom-outfits")
     - **Icon**: Emoji icon (👗 ✨ 🎭 💎)
     - **Short Description**: Brief text for preview cards
     - **Full Description**: Detailed description
   - Click **Save**
4. To **Edit**: Click the "Edit" button on any service
5. To **Delete**: Click the "Delete" button

---

### 2. Adding Gallery Images

**Getting Image URLs:**

Since we don't have file upload, you need image URLs. Here's how:

**Option A: Use Free Image Hosting**

1. Go to <https://imgbb.com> (free, easy)
2. Upload your image
3. Right-click the image → "Copy Image Address" (URL)
4. Use that URL in the admin panel

**Option B: Use Existing URLs**

- If you have images hosted elsewhere, copy their URLs

**Adding to Gallery:**

1. Go to Admin Panel → **Gallery**
2. Click **+ Add New Item**
3. Fill in:
   - **Title**: Name of the design
   - **Category**: Choose (Custom Outfits / Designer Wear / Costumes / Styling)
   - **Image URL**: Paste your image URL here
   - **Description**: Optional description
4. Click **Save**

**Editing Gallery:**

- Click "Edit" to modify any item
- Click "Delete" to remove an item

---

### 3. Managing Testimonials

1. Go to Admin Panel → **Testimonials**
2. To **Add New**:
   - Click "+ Add New Testimonial"
   - **Name**: Customer name
   - **Review**: Their feedback text
   - **Rating**: Select stars (1-5)
   - Click **Save**
3. To **Edit/Delete**: Use the buttons on each testimonial

---

### 4. Managing Enquiries

When customers fill out the contact form on the website, enquiries appear here.

1. Go to Admin Panel → **Enquiries**
2. View all customer messages
3. Change **Status**:
   - **New** - Just received
   - **Contacted** - You responded
   - **Completed** - Resolved
   - **Archived** - Old/unneeded
4. To **Delete**: Click the Delete button

---

## How to Delete Items

In every section (Services, Gallery, Testimonials, Enquiries):

1. Find the item you want to delete
2. Click the **Delete** button (red, on the right)
3. Confirm the deletion in the popup

---

## Customizing the Design

### Colors and Styling

The design uses these colors (in CSS):

- **Primary**: #2C2C2C (Dark Charcoal)
- **Accent**: #D4A574 (Warm Beige/Gold)
- **Background**: #FDFBF9 (Off White)
- **Secondary**: #F5F0EB (Warm Cream)

### Changing Colors

To change colors, you would need to edit the frontend code. Contact me if you want custom colors!

---

## Need Help?

If you have questions or need modifications:

- Check the admin panel sections
- All data saves automatically to the database

---

## Notes

- The website is hosted on Render (free tier)
- Data is stored in a JSON file (resets occasionally on free tier)
- For permanent storage, you would need a database upgrade
