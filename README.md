# MyCV

A personal CV/portfolio web application built with React, TypeScript, and Vite.

---

## Project Structure

```
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── vite-env.d.ts
    ├── assets/
    │   ├── myPhoto.jpg
    │   └── react.svg
    └── components/
        ├── Contact.css
        ├── Contact.tsx
        ├── Education.css
        ├── Education.tsx
        ├── MySelf.css
        ├── MySelf.tsx
        ├── Reference.css
        ├── Reference.tsx
        └── mySelf.tsx
```

---

## Scripts

Defined in [package.json](package.json):

- `dev` – Start the Vite development server
- `build` – Type-check and build the app for production
- `lint` – Run ESLint on the project
- `preview` – Preview the production build

---

## Dependencies

From [package.json](package.json):

**Dependencies:**

- react ^19.1.0
- react-dom ^19.1.0

**DevDependencies:**

- @eslint/js ^9.25.0
- @types/react ^19.1.2
- @types/react-dom ^19.1.2
- @vitejs/plugin-react ^4.4.1
- eslint ^9.25.0
- eslint-plugin-react-hooks ^5.2.0
- eslint-plugin-react-refresh ^0.4.19
- globals ^16.0.0
- typescript ~5.8.3
- typescript-eslint ^8.30.1
- vite ^6.3.5

---

## Main Files

- [index.html](index.html): HTML entry point
- [vite.config.ts](vite.config.ts): Vite configuration
- [src/main.tsx](src/main.tsx): React entry point
- [src/App.tsx](src/App.tsx): Main App component
- [src/components/](src/components/): Contains all React components (Contact, Education, MySelf, Reference, etc.)
- [src/assets/](src/assets/): Static assets (images, SVGs)
- [src/App.css](src/App.css), [src/index.css](src/index.css): Styling

---

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Build for production:
   ```sh
   npm run build
   ```
4. Preview the production build:
   ```sh
   npm run preview
   ```

---

## License

MIT (add your license here)
