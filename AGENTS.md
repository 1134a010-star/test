# AGENTS.md

Welcome, AI coding agent! This project is an interactive, parallax-scrolling exploration of European Classical Art history.

## Project Context
- **Objective**: Create a premium, abstract, and immersive web experience.
- **Eras Covered**: Ancient Greece/Rome, Renaissance, Baroque.
- **Tech Stack**: Vanilla HTML5, CSS3 (Vanilla), JavaScript (ES6+). No frameworks or Tailwind unless explicitly requested.

## Versioning Policy
- **Current Version**: 0.0.1 (tracked in `VERSION` file)
- **Increment Rule**: Every significant `git commit` must increment the version number.
- **Scheme**: [MAJOR].[MINOR].[PATCH]
  - **PATCH**: Small fixes, UI tweaks, or documentation updates.
  - **MINOR**: New features (e.g., adding a new art era).
  - **MAJOR**: Structural redesigns or breaking changes.
- **Responsibility**: The AI agent is responsible for deciding the increment level and updating the `VERSION` file.


## Developer & Agent Guidelines

### Visual Style & Aesthetic
- Maintain a "Dark Premium" aesthetic.
- Color Palette: Dark backgrounds (`#1a1a1a`), gold accents (`#c5a059`), light textured text (`#f4ecd8`).
- Use abstract shapes and generous spacing.
- Font stack: 'Playfair Display' for headings, 'Montserrat' for body.

### Technical Implementation
- **Parallax Structure**: Each section is a `.parallax-group`. Layers are defined by `translateZ` and `scale`. 
  - `.back`: `translateZ(-10px) scale(2)`
  - `.deep`: `translateZ(-20px) scale(3.1)`
  - `.fore`: `translateZ(5px) scale(0.5)`
- **Reveal Animations**: Content should use the `.hidden` class initially and be revealed via `IntersectionObserver` adding the `.reveal` class.
- **Images**: Currently uses absolute Local URI paths from the creator's machine. 
  > [!WARNING]
  > When working on images, prefer relative paths if possible (e.g., in an `assets/` folder).

### Best Practices
- Use Semantic HTML (`<section>`, `<article>`, `<h1>`-`<h6>`).
- Keep CSS organized with Variables (`:root`).
- Avoid adding external dependencies unless necessary for high-end animations (e.g., GSAP).

## Common Tasks
- **Adding a New Era**: Create a new `.parallax-group`, define its layers, and add a `.section-content` block. Update the background image/abstract shapes accordingly.
- **Refining Animations**: Adjust the `IntersectionObserver` threshold in `script.js` or the `transition` values in the CSS.
