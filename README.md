# 🎨 My Design Portfolio Website

A modern, responsive portfolio website to showcase your personal designs and creative work.

## ✨ Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Grid**: Display your designs in an organized gallery
- **Contact Form**: Allow visitors to get in touch with you
- **Smooth Navigation**: Seamless scrolling between sections
- **Easy to Customize**: Simple HTML structure and well-organized CSS

## 📁 File Structure

```
website/
├── index.html      # Main HTML structure
├── styles.css      # Professional styling and layout
├── script.js       # Interactive features and animations
├── README.md       # This file
└── designs/        # Folder for your design images (create this)
    ├── design1.jpg
    ├── design2.jpg
    └── ...
```

## 🚀 Getting Started

### 1. **View Locally**
- Simply open `index.html` in your web browser
- The website will load and display locally

### 2. **Deploy to GitHub Pages (Free Hosting)**
- Go to your repository **Settings**
- Scroll down to **Pages** section
- Select `main` branch as source
- Click **Save**
- Your site will be live at: `https://zhuoyu1121-jpg.github.io/website/`
- Wait 1-2 minutes for GitHub to build and deploy

## 🎨 Customization Guide

### **Update Your Name & Content**
Edit `index.html`:
```html
<h1>Welcome to My Design Portfolio</h1>
<p>Showcasing my creative work and design projects</p>
```

### **Change Colors**
Edit `styles.css` CSS variables at the top:
```css
:root {
    --primary-color: #6366f1;      /* Purple - change this */
    --secondary-color: #8b5cf6;    /* Light Purple - change this */
    --text-color: #333;
    --light-bg: #f8fafc;
    --white: #ffffff;
}
```

**Popular Color Combinations:**
- **Blue**: `#3b82f6` to `#1e40af`
- **Green**: `#10b981` to `#059669`
- **Red**: `#ef4444` to `#dc2626`
- **Pink**: `#ec4899` to `#be185d`

### **Add Your Designs**

1. **Create a `designs` folder** in your repository
2. **Upload your design images** (JPG, PNG)
3. **Update `index.html`** portfolio section:

```html
<div class="portfolio-grid" id="portfolioGrid">
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="designs/your-design1.jpg" alt="Design Title">
        </div>
        <h3>Design Title</h3>
        <p>Description of your design</p>
    </div>
    
    <div class="portfolio-item">
        <div class="portfolio-image">
            <img src="designs/your-design2.jpg" alt="Another Design">
        </div>
        <h3>Another Design</h3>
        <p>Description of this design</p>
    </div>
</div>
```

### **Update About Section**
Edit the about section in `index.html`:
```html
<section id="about" class="about">
    <div class="container">
        <h2>About Me</h2>
        <p>Write your personal design philosophy and what makes your work unique.</p>
    </div>
</section>
```

### **Update Contact Information**
The contact form is already set up in `index.html`. You can:
- Change the form placeholder text
- Add a link to email or social media after submission

## 📱 Sections Included

1. **Navigation Bar** - Sticky navigation with smooth scrolling
2. **Hero Section** - Eye-catching welcome section with call-to-action
3. **Portfolio Section** - Grid layout to showcase your designs
4. **About Section** - Tell your story
5. **Contact Section** - Contact form for inquiries
6. **Footer** - Professional footer

## 🔧 Advanced Customization

### **Add Social Media Links**
Add to the footer in `index.html`:
```html
<footer>
    <div class="social-links">
        <a href="https://instagram.com/yourhandle">Instagram</a>
        <a href="https://twitter.com/yourhandle">Twitter</a>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
    </div>
    <p>&copy; 2026 My Design Portfolio. All rights reserved.</p>
</footer>
```

### **Change Fonts**
Add to `styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
    font-family: 'Poppins', sans-serif;
}
```

## 📊 Image Optimization Tips

- **Size**: Keep images under 500KB for faster loading
- **Format**: Use JPG for photos, PNG for graphics
- **Dimensions**: Use 600x400px or similar for portfolio items
- **Tools**: Use TinyPNG.com to compress before uploading

## 🌐 Domain Setup (Optional)

To use a custom domain:
1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. Go to repo Settings → Pages
3. Add your custom domain
4. Update DNS records at your domain provider

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths in `index.html`
- Make sure images are in the `designs/` folder
- Use relative paths like `designs/image.jpg`

**Website not deploying?**
- Wait 2-3 minutes for GitHub Pages to build
- Check repo Settings → Pages for deployment status
- Ensure main branch is selected

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check that styles.css is linked in index.html

## 💡 Tips for Best Results

✅ Use high-quality design images
✅ Write compelling descriptions for each project
✅ Keep color scheme consistent
✅ Test on mobile devices
✅ Update your portfolio regularly with new work
✅ Share your portfolio link on social media

## 📚 Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [CSS Gradients](https://cssgradient.io/)
- [Google Fonts](https://fonts.google.com/)
- [Image Compression](https://tinypng.com/)

## 📄 License

This portfolio template is open source and free to use.

---

**Happy designing! 🎨**

Questions or need help? Check the GitHub repository or create an issue.
