# Component Structure

This document outlines the modular component architecture of the portfolio application.

## Directory Structure

```
src/
├── components/
│   ├── Sidebar/
│   │   ├── Profile.jsx         # User profile section
│   │   ├── NavItem.jsx          # Individual navigation item
│   │   ├── Navigation.jsx       # Navigation menu with items
│   │   ├── ContactButton.jsx    # CV download button
│   │   └── Sidebar.jsx          # Main sidebar container
│   ├── common/
│   │   ├── ProjectItem.jsx      # Reusable project display component
│   │   ├── PageHeader.jsx       # Page header with title and subtitle
│   │   └── Divider.jsx          # Horizontal divider line
│   └── pages/
│       ├── OverviewContent.jsx      # Overview page content
│       ├── ProjectsContent.jsx      # Projects page content
│       ├── TechnicalContent.jsx     # Technical Stack page content
│       └── PublicationsContent.jsx  # Publications page content
├── App.jsx                      # Main app component with routing logic
├── main.jsx                     # Application entry point
└── index.css                    # Global styles

```

## Component Organization

### Sidebar Components (`components/Sidebar/`)
- **Profile**: Displays user name, role, and availability status
- **NavItem**: Individual navigation link with count badge and active state
- **Navigation**: Navigation menu that manages all nav items and system status
- **ContactButton**: Download CV call-to-action
- **Sidebar**: Combines all sidebar components into a cohesive layout

### Common Components (`components/common/`)
Reusable components used across multiple pages:
- **ProjectItem**: Displays project year, title, and tech stack
- **PageHeader**: Standard page header with secure access badge
- **Divider**: Customizable horizontal divider line

### Page Components (`components/pages/`)
Full page content components for each view:
- **OverviewContent**: Landing page with summary and highlights
- **ProjectsContent**: Complete project portfolio with descriptions
- **TechnicalContent**: Programming languages and infrastructure tools
- **PublicationsContent**: Research papers and publications

## Best Practices Implemented

1. **Single Responsibility**: Each component has one clear purpose
2. **Reusability**: Common components are extracted and parameterized
3. **Clear Naming**: Component names clearly describe their function
4. **Logical Grouping**: Components organized by feature/domain
5. **Props Drilling Prevention**: State managed at appropriate levels
6. **Clean Imports**: Explicit imports from specific component files
7. **Consistent Structure**: All components follow similar patterns

## State Management

- **App-level state**: `activeView` managed in App.jsx
- **Props passing**: State passed down through Sidebar to Navigation
- **Event handling**: Click handlers bubble up to parent components

## Adding New Pages

1. Create new component in `components/pages/`
2. Import in `App.jsx`
3. Add case in `renderContent()` switch statement
4. Update navigation items in `Navigation.jsx`

## Styling

All components use the global CSS defined in `index.css`. Inline styles are used sparingly for component-specific layout needs.
