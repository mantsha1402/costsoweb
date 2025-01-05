# Costco Style Store

A responsive e-commerce webpage inspired by Costco's online shopping platform. This project features a product catalog, shop navigation, a login modal, and a footer with social media integration.

## Features

### 1. Home Page
- Displays a welcoming message and product cards with images, names, and prices.
- Dynamic interaction for viewing product details (prompts login if not authenticated).

### 2. Shop Button with Nested Categories
- A standalone shop button (`☰ Shop`) that displays a dropdown menu.
- Dynamically loads categories, subcategories, and items:
  - **Categories:** Appliances, Baby, Beauty, Electronics.
  - **Subcategories:** Baby Care, Baby Safety, etc.
  - **Items:** Creams, Lotions, Baby Oils, etc.
- Nested navigation system with a back button.

### 3. Login/Signup Modal
- Login modal appears when the `Login` button on the navbar is clicked.
- A `Register` form toggle within the modal.
- Includes a close (`X`) button to exit the modal.

### 4. Footer
- Footer card contains:
  - Website details.
  - Clickable social media icons (Facebook, Twitter, Instagram).
- Copyright notice below the footer.

### 5. Hover Effects
- Buttons and links display an underline hover effect for better user feedback.

---

## Project Structure

```
project/
├── index.html         # Main HTML file
├── styles.css         # CSS for styling the page
├── assets/            # Contains images (social media icons, product images, etc.)
├── script.js          # Handles dynamic features (categories, login modal, etc.)
└── README.md          # Documentation
```

---

## Getting Started

### Prerequisites
To run this project, you need:
- A modern web browser (Chrome, Firefox, etc.).


## Installation
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)


### How to Use
1. Open `index.html` in a web browser.
2. Explore the following features:
   - Use the `☰ Shop` button to navigate categories.
   - Interact with product cards.
   - Open and close the login modal.
3. Check the footer for social media links.

---

## Deployment

### Deploy on Glitch
1. Go to [Glitch](https://glitch.com).
2. Create a new project and upload:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder.
3. Click **Show** to view your live project.
4. Share your live URL (e.g., `https://your-project-name.glitch.me`).

---

## Scripts

### `script.js`
- Handles dynamic dropdown menus for categories and subcategories.
- Toggles the visibility of the login/signup modal.
- Implements login state validation.

---

## Customization

### Colors and Styles
Modify `styles.css` to:
- Change colors, fonts, or layouts.
- Update hover effects.

### Categories and Items
Edit the `categories` object in `script.js` to add or modify categories, subcategories, and items:
```javascript
const categories = {
    Appliances: {},
    Baby: {
        'Baby Care': ['Creams and Lotions', 'Baby Oils', 'Baby Shampoo'],
        'Baby Safety': ['Monitors', 'Safety Gates'],
        'Baby Accessories': ['Strollers', 'Car Seats']
    },
    // Add more categories here
};
```

---

## Future Enhancements

1. **Backend Integration**
   - Add user authentication and database storage.
   - Implement cart and checkout functionality.

2. **Responsive Design**
   - Enhance mobile and tablet layouts.

3. **Advanced Features**
   - Product search and filter functionality.
   - Ratings and reviews.

---

## Credits
- Icons: [Freepik](https://www.freepik.com/) and [Flaticon](https://www.flaticon.com/).
- Fonts: Google Fonts.

---
