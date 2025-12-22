# Layout Generator (Flexbox & Grid)

A visual, interactive **CSS Layout Generator** built with React. This tool lets you experiment with **both Flexbox and CSS Grid** properties in real time and instantly see how layout changes affect your UI — no guesswork, no constant tab-switching to documentation.

Perfect for learners and designers who want to **understand layouts by doing**.

---

## Features

### Flexbox Generator

- Dynamic item count (with safety limits)
- Flex direction & wrapping controls
- Gap, width, height & border-radius adjustments
- Alignment controls (`justify-content`, `align-content`)
- Style toggle to visualize layout boundaries
- Preset layouts for quick experimentation

### Grid Generator

- Adjustable rows & columns

- Grid gap control

- Item width & height control

- Alignment controls (`justify-items`, `align-items`, `place-items`)

- Real-time grid behavior visualization

- Clean, beginner-friendly UI

---

## Why this project?

CSS layouts (Flexbox & Grid) are powerful — but abstract. Reading documentation only goes so far.

This generator helps you:

- Visually understand how Flexbox **and Grid** properties interact
- Understand how **DOM manipulation through state** works
- Debug layout issues faster
- Build intuition instead of memorizing values
- Experiment safely without breaking real projects

It’s essentially a **layout playground**, built with learning-first UX in mind.

---

## Tech Stack

- **React** (component-based architecture)
- **Tailwind CSS** (custom themed UI)
- **Modern JavaScript (ES6+)**

No external layout libraries. Everything is handled using native CSS Flexbox and Grid.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Lumica-Melani/Layout-generator.git
cd Layout-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app locally

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## How to Use

1. Choose **Flexbox** or **Grid** from the navigation
2. Adjust layout controls using the panel
3. Observe real-time layout changes
4. Toggle styles to better understand spacing and boundaries
5. Use presets to explore common real-world patterns

All changes update the layout **instantly**.

---

## Presets Included

- **Centered** – Perfect centering demo
- **Space Between** – Navigation-style layout
- **Card Layout** – Responsive card/grid behavior

Presets help beginners understand common real-world use cases quickly.

---

## Learning Focus

This project was built with an emphasis on:

- DOM manipulation through React state
- Controlled components
- Mapping UI controls directly to CSS behavior
- Layout problem-solving using Flexbox & Grid
- Writing clean, reusable components

---

## Future Improvements

- Copy generated **Flexbox & Grid CSS** to clipboard
- Individual item controls (`align-self`, `grid-area`)
- Responsive breakpoint previews
- Save & share layout configurations
- Visual guides for grid lines & flex axes
- Export layouts as reusable snippets

---

Happy learning & happy layouts!
