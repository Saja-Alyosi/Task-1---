# 🎨 Saja's Portfolio Website


🌟 Task Instructions

Create and design personal website

Attach all files and write readme in GitHub

✨ The solution:

## ✨ Key Features

### 🎯 Design
- **Modern & Elegant Design** - Clean and attractive user interface
- **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- **Professional Color Scheme** - Cohesive color system using purple and gold
- **Smooth Animations** - Refined transitions and motion effects

### ⚡ Interactive Features
- **Animated Particle Background** - Beautiful and smooth Canvas graphics
- **Live Typing Effect** - Animated text display
- **Reveal Animations** - Elements smoothly appear when scrolled into view
- **Smooth Scrolling** - Enhanced scrolling experience

### 📱 Included Sections
1. **Hero Section** - Eye-catching headline with typing effect
2. **Skills** - Comprehensive display of technologies and tools
3. **Experience** - Volunteering and leadership roles
4. **GitHub CTA** - Call-to-action to explore projects

---

## 🛠️ Technologies Used

### Frontend Stack
- **HTML5** - Modern semantic markup
- **CSS3** - Advanced styling and animations
- **JavaScript (Vanilla)** - No heavy frameworks
- **Canvas API** - High-performance particle graphics

### Fonts & Icons
- **Google Fonts**
  - Cormorant Garamond (elegant headings)
  - Inter (clean body text)
- **Font Awesome 6.5.0** - Extensive icon library

---

## 📂 File Structure

```
portfolio/
├── index.html          # Main HTML page
├── style.css          # Styles and design
├── script.js          # Interactive functionality
└── README.md          # This file
```

---

## 🚀 Getting Started

### 1. Installation & Setup
```bash
# Clone or download the files to a local folder
cd portfolio

# Open in browser
open index.html

# Or use a local server (recommended)
python -m http.server 8000
# Then visit: http://localhost:8000
```

### 2. Customization

**Update Personal Information:**
- Edit text content in `index.html`
- Update GitHub and social media links

**Modify Colors:**
In `style.css`, update CSS variables in `:root`:
```css
:root {
    --purple: #a78bfa;
    --gold: #fbbf24;
    --bg: #0b0d15;
    /* ... and more */
}
```

**Customize Typing Phrases:**
In `script.js`, edit the `phrases` array:
```javascript
const phrases = [
    'Your first phrase',
    'Your second phrase',
    'Add more phrases here'
];
```

**Adjust Particle Settings:**
```javascript
const COUNT = 80;        // Number of particles
const MAX_SPEED = 0.35;  // Speed of particles
const dist = 150;        // Connection distance
```

---

## ⚙️ Component Breakdown

### Particle Canvas Background
```javascript
// 80 animated particles moving smoothly
// Connect to each other when close
// Bounce off screen edges
// Configurable speed and density
```

**Key Features:**
- Responsive to window resizing
- Smooth requestAnimationFrame animation
- Dynamic line connections
- Opacity variations for depth

### Typing Effect
- Smooth character-by-character typing
- Automatic deletion with pause
- Seamless phrase cycling
- Variable speed for natural feel

### Intersection Observer
- Tracks elements entering viewport
- Triggers reveal animations
- Optimized performance
- No animation lag

---

## 📊 Performance

✅ **Performance Optimizations:**
- Uses `requestAnimationFrame` for smooth graphics
- Minimal external dependencies
- Efficient font loading
- Optimized CSS with no redundancy
- Hardware-accelerated animations

---

## 🎨 Color Palette

| Element | Color | Hex Code |
|---------|-------|----------|
| Background | Very Dark | `#0b0d15` |
| Cards | Transparent | `rgba(255, 255, 255, 0.04)` |
| Text | Light | `#f0f2f8` |
| Accent Purple | Primary | `#a78bfa` |
| Accent Gold | Highlight | `#fbbf24` |
| Dark Purple | Dark Accent | `#7c3aed` |

---

## 📱 Responsive Breakpoints

- **Desktop (1200px+)** - Full experience with all features
- **Tablet (700px - 992px)** - 2-column grid for skills
- **Mobile (480px - 700px)** - Optimized single column layout
- **Small Mobile (<480px)** - Minimalist responsive design

```css
/* Main breakpoints */
@media (max-width: 992px) { /* Tablet */ }
@media (max-width: 700px) { /* Mobile */ }
@media (max-width: 480px) { /* Small devices */ }
```

---

## 🔗 External Resources

- **Google Fonts** - Font loading
- **Font Awesome 6.5.0** - Vector icons
- **CDN Links** - Optimized delivery

---

## 💡 Development Tips

### Adding a New Section
1. Create new HTML with `class="reveal"` or `class="reveal-scale"`
2. Animations will trigger automatically on scroll

### Modifying Animations
```css
.reveal {
    transition: opacity 0.9s ease, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    /* Adjust duration and easing */
}
```

### Performance Tuning
- Reduce particle count if performance is slow: `COUNT = 50`
- Increase connection distance: `const dist = 200`
- Adjust animation duration: `transition: 0.6s ease`

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Full support

---

## 🎯 Sections Detail

### Hero Section
- Responsive typography with clamp()
- Gradient text for name
- Animated typing indicator
- Smooth entrance animation

### Skills Grid
- Auto-responsive grid layout
- Hover effects with elevation
- Icon color coding
- Technology badges

### Experience Timeline
- Vertical timeline design
- Animated dots and line
- Smooth reveal animations
- Card hover effects

### GitHub CTA
- Call-to-action card
- Gradient background
- Icon and text layout
- Direct GitHub link

---

## 🔧 Customization Guide

### Adding Skills
```html
<div class="skill-category reveal-scale">
    <div class="cat-icon"><i class="fas fa-icon"></i></div>
    <h3>Category Name</h3>
    <div class="tags">
        <span><i class="fab fa-icon"></i> Technology</span>
    </div>
</div>
```

### Adding Experience
```html
<div class="timeline-item reveal-left">
    <div class="exp-card">
        <div class="icon"><i class="fas fa-icon"></i></div>
        <h4>Position Title</h4>
        <div class="org">Organization</div>
    </div>
</div>
```

---

## 📝 License

This project is open source and ready for personal or professional use.

---

## 🤝 Contributing

Feel free to improve and enhance the website!

### Suggestions for Enhancement
- Add project showcase section
- Implement contact form
- Add dark/light theme toggle
- Add smooth scroll spy navigation
- Integrate with blog or news feed

---

## 📞 Support

For questions or issues, check the code comments or reach out through GitHub.

---

**Made with ❤️ by Saja**

Last Updated: 2026
