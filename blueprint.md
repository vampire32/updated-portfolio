# Project Blueprint

## Overview

This document outlines the project structure, design, and features of the application. It serves as a single source of truth for all development and maintenance efforts, ensuring consistency and alignment with the project's goals.

## Project Outline

### Style and Design

- **Colors**: The application uses a modern and vibrant color palette, with a primary color of `#edf2f8` and a secondary color of `#313bac`. The full color scheme is defined in `src/app/globals.css`.
- **Typography**: The primary font is "DM Sans", which is imported from Google Fonts. The base font size is `0.8rem`, with larger sizes for headings and other prominent elements.
- **Layout**: The application uses a responsive layout that adapts to different screen sizes. The main layout is defined in `src/app/layout.js`, and the `Navbar` component is included in the root layout.

### Features

- **Navbar**: The application features a responsive navbar with client-side navigation. The navbar is defined in `src/components/Navbar.js` and styled with `src/components/Navbar.module.scss`.
    - **Mobile Menu**: The mobile menu now has a solid white background. The previous implementation used a background image that was causing a build error.

### Known Issues & Fixes
- **Build Error**: `Module not found: Can't resolve '../../assets/bgWhite.png'`
- **Fix**: Removed the `background: url("../../assets/bgWhite.png");` from `src/components/Navbar.module.scss` to resolve the build error. The mobile menu background is now a solid white color.

## Current Plan

- **Next Steps**: The next step is to continue building out the application by adding new features and improving the existing codebase. The `blueprint.md` file will be updated to reflect these changes as they are made.