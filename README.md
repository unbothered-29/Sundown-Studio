# Sundown Studio — Frontend Clone

A pixel-perfect frontend clone of the [Sundown Studio](https://www.sundown-studio.com/) website, built with vanilla HTML, CSS, and JavaScript. The project replicates the studio's multi-page layout, smooth scroll animations, interactive elements, and typographic design system.

---

## Live Preview

🔗 **[https://sundown-studio-unbothered.vercel.app/](https://sundown-studio-unbothered.vercel.app/)**

Deployed on [Vercel](https://vercel.com/). To run locally, open `index.html` with a local server (e.g. VS Code Live Server) to ensure fonts and video load correctly.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, layout |
| JavaScript (Vanilla) | Interactivity and DOM manipulation |
| GSAP 3 | Animation library |
| ScrollTrigger (GSAP plugin) | Scroll-based animation triggers |
| Locomotive Scroll | Smooth scrolling with inertia |
| Swiper.js | Carousel/slider component |

---

## Project Structure

```
sundown-studio/
│
├── index.html               # Main HTML file
├── style.css                # All styles
├── script.js                # All JavaScript
│
├── fonts/
│   ├── NeueHaasGrotDisp-35Thin-Trial.otf
│   ├── NeueHaasGrotText-55Roman-Trial.otf
│   └── NeueHaasGrotDispRound-75Bold-Trial.otf
│
└── video.mp4                # Hero section background video
```

---

## Page Sections

### Page 1 — Hero
- Full-viewport landing section with a `#efeae3` warm off-white background
- Navigation bar with three pill-shaped links (Work, Studio, Contact) featuring a sliding dark fill hover animation using `::after` pseudo-elements
- Large typographic headline — "Spaces that inspire" — in uppercase at `10vw` font size
- Subtitle paragraph on the left describing the studio's focus
- Animated blob shape (`#hero-shape`) built from three layered `div` elements with blur filters and CSS `@keyframes` animations (`anime1`, `anime2`) to simulate a fluid orange glow effect
- Autoplay looped muted video with rounded corners placed below the hero text

### Page 2 — Marquee + About
- Infinite horizontal marquee built with duplicated `.con` elements animated via CSS `@keyframes move` — no JavaScript required
- Orange circular dividers between marquee words
- Animated gooey blob (`#gooey`) using `filter: blur` and a `skew` keyframe animation for an organic morphing effect
- Two-column about section: a large statement paragraph on the left and a portrait image with descriptive text on the right
- "Featured Projects" label with an orange dot indicator at the bottom

### Page 3 — Projects List
- Hover-reveal project list: each `.elem` row shows an orange overlay (`#ff9831`) that slides up from below on hover using CSS `top` transition
- A floating preview image (`#fixed-img`) that follows the user's mouse cursor, displaying the project's image pulled from a `data-image` attribute on each row
- Project entries include name, client brand, and category (Environment / Experiential)
- Mouse tracking implemented in JavaScript: `mousemove` event updates the `left` and `top` of the fixed image in real time
- `pointer-events: none` on the floating image prevents it from interfering with row hover states

### Page 4 — Process / Design Section
- Full-height dark card (`#design`) with a black background
- Left panel lists three clickable headings: Design, Project, Execution
- Clicking a heading updates the right-side image and the paragraph description dynamically via `data-image` and `data-para` attributes — no page reload
- Active heading switches to full white (`#efeae3`) while inactive ones dim to `#504a45`
- Right panel shows a full-height cover image that changes on heading click

### Page 5 — Spacer / Future Content Area
- Reserved section (`min-height: 60vh`) for additional content

### Page 6 — Footer Scroll Spacer
- A `height: 105vh` transparent div that provides the scroll depth needed to reveal the fixed footer beneath `#main`

---

## Footer

- `position: fixed` at the bottom of the viewport, revealed as the user scrolls through `#page6`
- Large typographic wordmark "Sundown" at `23vw`
- Top bar (`#footer-div`) with navigation links (Work, Studio, Contact) on the left and an email subscription input on the right
- Bottom bar (`#footer-bottom`) with copyright, location, and social media links laid out in a flex row

---

## Typography

Custom `@font-face` declarations load three weights of **Neue Haas Grotesk Display** from local `.otf` files. All three share the same `font-family` name and are differentiated by `font-weight`:

| Weight | File | Usage |
|---|---|---|
| `300` — Thin | `NeueHaasGrotDisp-35Thin-Trial.otf` | Light body text, captions |
| `400` — Roman | `NeueHaasGrotText-55Roman-Trial.otf` | Default body text |
| `700` — Bold | `NeueHaasGrotDispRound-75Bold-Trial.otf` | Headings, nav labels |

Usage in CSS is handled purely through `font-weight` — `font-family` stays `"Neue Haas Grotesk Display"` everywhere.

---

## CSS Highlights

- **Fluid sizing** — font sizes, spacing, and layout dimensions use `vw` units throughout for viewport-relative scaling
- **CSS custom animations** — `anime1`, `anime2` (blob), `move` (marquee), `gooey` (morphing blob) — all defined with `@keyframes` and run on infinite loops
- **Pseudo-element hover effects** — nav links use `::after` for the fill animation; project rows use an `.overlay` div
- **Fixed footer pattern** — `#footer` uses `position: fixed; z-index: 99; bottom: 0` and is revealed by scrolling through the `#page6` spacer, which sits inside `#main` at `z-index: 999`

---

## JavaScript Highlights

### Locomotive Scroll
```js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
```
Enables smooth inertia-based scrolling on the `#main` container.

### Mouse-Tracking Image (Page 3)
```js
document.addEventListener("mousemove", function (e) {
    fixed.style.left = e.clientX + 20 + "px";
    fixed.style.top = e.clientY - 100 + "px";
});
```
The floating preview image follows the cursor position on the projects list section.

### Dynamic Project Preview
```js
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`;
    });
});
```
Each project row carries its image URL in a `data-image` attribute, which gets applied to the floating div on hover.

### Page 4 Interactive Headings
```js
h2s.forEach(function (h2) {
    h2.addEventListener("click", function () {
        // Reset all headings to inactive state
        h2s.forEach(b => {
            b.style.color = "#504a45";
            b.style.paddingLeft = "15px";
        });
        // Activate clicked heading
        this.style.color = "#efeae3";
        this.style.paddingLeft = "0px";
        // Swap image and paragraph
        pg4img.src = this.getAttribute("data-image");
        p.textContent = this.getAttribute("data-para");
    });
});
```

---

## Known Considerations

- The custom fonts are trial versions and are loaded locally — ensure the `fonts/` folder is present
- The hero video (`video.mp4`) must be present in the root directory for Page 1 to render correctly
- Locomotive Scroll wraps `#main` but the footer sits outside it — scroll depth is managed manually via `#page6`'s height
- The site is desktop-optimized; responsive/mobile breakpoints are not implemented in this version — best viewed at 1280px width and above

---

## Deployment

The project is deployed on **Vercel** via direct GitHub repository import.

- No build step required — it is a static site (plain HTML, CSS, JS)
- Vercel serves `index.html` as the entry point automatically
- Font files and video are included in the repo and served as static assets
- Live URL: [https://sundown-studio-unbothered.vercel.app/](https://sundown-studio-unbothered.vercel.app/)

To deploy your own copy:
1. Push the project to a GitHub repository
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Leave all build settings as default and click Deploy

---

## Credits

- Design reference: [Sundown Studio](https://www.sundown-studio.com/)
- Fonts: Neue Haas Grotesk Display (trial) by Linotype
- Libraries: [GSAP](https://greensock.com/gsap/), [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/), [Swiper.js](https://swiperjs.com/)
- Images: Sourced from Sundown Studio's public Webflow assets