# IDHL Front-End Developer Test

This project was created as part of the IDHL Shopify Front-End Developer test. It is a responsive landing page for a fictional pet brand, featuring an add-to-bag interaction and a slide-out cart built with vanilla JavaScript, SCSS, and Webpack.

---

## Features

- **Mobile-first build** using Flexbox for responsive layouts  
- **Reusable JavaScript components** for cart and loader functionality  
- **1-second circular loading animation** before the cart slides out  
- **Accessible cart functionality** with ARIA attributes  
- **Smooth open/close animations** for the slide-out cart  
- **Cross-browser friendly**  
- **Google Fonts:** Roboto and Open Sans  
- **BEM naming convention** for consistent, maintainable CSS  

---

## Reusable Components

- **Cart Component (`cart.js`)**  
  Handles all logic for opening, closing, and managing the slide-out cart, including event listeners for the add-to-bag button, cart icon, and close/continue buttons.

- **Loader Component (`loader.js`)**  
  Displays a reusable circular spinner animation that can be used throughout the website for loading states.

Both components are modular and imported into the main `index.js` file for easy reuse on other pages.

---

## Tech Stack

- **HTML5**
- **SCSS (compiled via Webpack + Sass Loader)**
- **JavaScript (ES6 Modules)**
- **Webpack 5**
- **PostCSS + Autoprefixer**

---

## Setup & Run Instructions

1. **Install dependencies**
    ``` 
    npm install
    ```
**
2. **Start the development server**
    ``` 
    npm run start
    ```
3. **Build for production**
    ```
    npm run build
    ```
4. **View in browser**
    ```
    http//localhost:8080
    ```

## Project Structure
idhl-test/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── cart.js
│   │   └── loader.js
│   ├── styles/
│   │   ├── main.scss
│   │   ├── _cart.scss
│   │   └── _loader.scss
│   └── index.js
├── assets/
│   ├── bag.svg
│   ├── close.svg
│   ├── logo.svg
│   ├── product-large.jpg
│   └── product-small.jpg
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
