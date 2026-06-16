# nataliemuscat.com

Hand-coded portfolio site. HTML · CSS · JavaScript. No frameworks, no build step.

---

## File structure

```
index.html          Homepage
about.html          About — bio, Instagram, credentials, events
web-design.html     Web Design projects
development.html    Development projects
photography.html    Photography masonry grid
contact.html        Contact form
css/style.css       All styles
js/main.js          Scroll reveal + mobile nav
images/             All photos and screenshots
```

---

## Placeholders to fill in

### LinkedIn link
In `about.html`, find:
```html
<a href="#" class="ab-linkedin" ...>
```
Replace `href="#"` with your LinkedIn profile URL.

### Formspree (contact form)
In `contact.html`, find:
```html
<form id="contact-form" action="#" ...>
```
Replace `action="#"` with your Formspree endpoint URL.
Get one at https://formspree.io — free tier works fine.

### Instagram embed (SnapWidget)
In `about.html`, find the `or-instagram-placeholder` block and
replace it with your SnapWidget embed snippet.
Instructions: https://snapwidget.com

### GitHub link (invoice tracker)
In `development.html`, find:
```html
<a href="#" class="wd-project-link" ...>View on GitHub →</a>
```
Replace `href="#"` with your repo URL when it's ready.

### Offroad Connections site link
In `web-design.html`, find the Offroad Connections project and
replace `href="#"` with the live Shopify store URL.

---

## Adding photos (photography page)

1. Save photos to `images/` at 1200px wide, high-quality JPG or WebP
2. In `photography.html`, replace a placeholder block:

```html
<!-- Before -->
<div class="masonry-item reveal">
  <div class="masonry-placeholder" style="height:260px;">
    <span>your-photo.jpg</span>
  </div>
</div>

<!-- After -->
<div class="masonry-item reveal">
  <img src="images/your-photo.jpg" alt="Brief description" />
</div>
```

---

## Adding project screenshots

Save screenshots to `images/` at 1400px wide, 16:10 ratio, JPG.

In `web-design.html` or `development.html`, replace the placeholder:
```html
<!-- Before -->
<span class="wd-thumb-placeholder mono">images/portfolio.jpg</span>

<!-- After -->
<img src="images/portfolio.jpg" alt="Description of the project" />
```

---

## Adding/updating events (about page)

Copy an event block in `about.html` and update the month, day, name, location, and description.

For past events, add the `past` class:
```html
<div class="or-event-item past">
```

---

## Nav order

`About · Web Design · Development · Photography · Contact`

All six HTML files share this same nav — if you rename or add a page,
update the `<ul class="nav-links">` block in every file.
