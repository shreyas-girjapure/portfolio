# Shreyas Girjapure - Portfolio Site

Professional portfolio website for Shreyas Girjapure - Financial Systems Architect

## Tech Stack

- React 18
- Vite
- Modern CSS (no frameworks)

## Project Structure

```
src/
├── components/
│   ├── Sidebar/          # Sidebar components (Profile, Navigation, etc.)
│   ├── common/           # Reusable components (ProjectItem, PageHeader, etc.)
│   └── pages/            # Page content components
├── App.jsx               # Main app with routing logic
├── main.jsx              # Entry point
└── index.css             # Global styles
```

See [COMPONENT_STRUCTURE.md](COMPONENT_STRUCTURE.md) for detailed component documentation.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173/ in your browser

## Build for Production

```bash
npm run build
```

## Features

- **Modular Architecture**: Components organized by feature and responsibility
- **Reusable Components**: Shared components for consistent UI
- **Multiple Pages**: Overview, Projects, Technical Stack, Publications
- **Interactive Navigation**: Dynamic routing between pages
- **Clean Design**: Minimal, professional aesthetic
- **Smooth Animations**: Hover effects and transitions

## Component Best Practices

- Single Responsibility Principle
- Clear naming conventions
- Logical file organization
- Props-based customization
- Minimal inline styling
