# 🚀 Quick Start Guide - GreenScape Gardening Website

## ⚡ Get Started in 3 Steps

### Step 1: Open the Website Locally
```
1. Navigate to the html-version folder
2. Double-click index.html
3. Your browser will open the homepage
```

### Step 2: Test All Pages
Click through each page to verify everything works:
- ✅ Home (index.html)
- ✅ About (about.html)
- ✅ Services (services.html)
- ✅ Contact (contact.html)
- ✅ FAQ (faq.html)
- ✅ Privacy Policy (privacy-policy.html)
- ✅ Terms & Conditions (terms.html)
- ✅ Disclaimer (disclaimer.html)

### Step 3: Deploy to Your Server
Upload these files to your web hosting:
```
html-version/
├── *.html (all 8 HTML files)
├── css/style.css
└── js/main.js
```

## 🎯 What's Included

| Component | Status | Description |
|-----------|--------|-------------|
| Header | ✅ | Sticky navigation with mobile menu |
| Footer | ✅ | 4-column layout with contact info |
| Sticky CTA | ✅ | Floating call button |
| Exit Popup | ✅ | Lead capture on exit intent |
| Cookie Banner | ✅ | GDPR compliant consent |
| Back to Top | ✅ | Smooth scroll button |
| Animations | ✅ | Scroll-triggered fade-ins |

## 📝 Quick Customization

### Change Phone Number
Search and replace in all files:
```
OLD: 206-971-8293
NEW: YOUR-PHONE-NUMBER
```

### Change Email
Search and replace in all files:
```
OLD: help@greenscapegradening.com
NEW: your-email@yourdomain.com
```

### Change Colors
Edit `/css/style.css` line 19:
```css
--color-primary: #16a34a;  /* Change to your brand color */
```

### Replace Images
Update image URLs in HTML files:
```html
<!-- Find: -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- Replace with: -->
<img src="your-image-url.jpg" alt="...">
```

## 🔧 Connect Forms to Backend

### Option 1: Use Formspree (Easiest)
1. Sign up at https://formspree.io
2. Update contact form:
```html
<form action="https://formspree.io/f/YOUR-ID" method="POST">
```

### Option 2: Use Your Own Backend
1. Create a PHP file (process-form.php)
2. Update form action:
```html
<form action="process-form.php" method="POST">
```

### Option 3: Use Netlify Forms
1. Deploy to Netlify
2. Add to form tag:
```html
<form name="contact" netlify>
```

## 📊 Add Analytics

### Google Analytics
Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 Mobile Testing

**Test on your phone:**
1. Upload files to web server
2. Visit your URL on mobile
3. Test:
   - ✅ Mobile menu works
   - ✅ Forms are easy to fill
   - ✅ Buttons are tap-friendly
   - ✅ Text is readable

## ✅ Pre-Launch Checklist

- [ ] Test all 8 pages
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Test FAQ accordion
- [ ] Test mobile menu
- [ ] Test cookie consent banner
- [ ] Test exit popup
- [ ] Replace placeholder images
- [ ] Update contact information
- [ ] Add Google Analytics
- [ ] Test on mobile devices
- [ ] Check SSL certificate (HTTPS)
- [ ] Submit sitemap to Google

## 🚨 Common Issues & Fixes

### Issue: Cookie banner not appearing
**Fix:** Clear your browser's localStorage and refresh

### Issue: Form not submitting
**Fix:** Add proper action URL to form tag

### Issue: Images not loading
**Fix:** Check image URLs are correct and accessible

### Issue: Mobile menu not working
**Fix:** Ensure main.js is loading properly

### Issue: Animations not working
**Fix:** Check if JavaScript is enabled in browser

## 📱 Hosting Recommendations

**Best for Beginners:**
- Netlify (Free tier available)
- Vercel (Free tier available)
- GitHub Pages (Free)

**Traditional Hosting:**
- Bluehost
- SiteGround
- HostGator

**Deployment Steps (Netlify):**
1. Drag html-version folder to Netlify
2. Site is live instantly!
3. Free SSL included

## 🎯 SEO Optimization

**Already included:**
- ✅ Semantic HTML tags
- ✅ Meta descriptions
- ✅ Page titles
- ✅ Alt text for images
- ✅ Mobile responsive
- ✅ Fast loading

**To improve further:**
1. Add meta keywords
2. Create XML sitemap
3. Submit to Google Search Console
4. Add Open Graph tags
5. Add schema markup

## 💡 Pro Tips

1. **Backup Everything**: Keep a copy of original files
2. **Test in Incognito**: Clear cache issues
3. **Mobile First**: Always test on phone
4. **Speed Test**: Use PageSpeed Insights
5. **Security**: Always use HTTPS

## 📞 Need Help?

**Check these files for detailed info:**
- `README.md` - Complete documentation
- `css/style.css` - All styling code with comments
- `js/main.js` - All JavaScript with comments

**Common Questions:**

**Q: How do I change the logo?**
A: Replace the icon in header section (main.js, line 20)

**Q: How do I add a new page?**
A: Copy an existing HTML file, update content, add link to navigation

**Q: Can I use this commercially?**
A: Yes! It's your website.

**Q: Do I need Node.js or npm?**
A: No! This is pure HTML/CSS/JS. Just upload and go.

## 🎉 You're Ready!

Your website is complete and ready to launch. Upload the files to your hosting provider and you're live!

**Quick Deploy:**
```bash
# If using FTP:
1. Connect to your server
2. Upload all files from html-version/
3. Done!

# If using Netlify:
1. Drag html-version folder to netlify.com/drop
2. Done!
```

---

**Last Updated:** March 2026
**Version:** 1.0.0 - Complete
