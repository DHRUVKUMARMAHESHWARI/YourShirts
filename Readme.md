# Modern Product Listing Website

## Project Overview

This responsive single-page e-commerce product listing website was developed as part of a technical assessment. The project implements a fully responsive design that adapts seamlessly across all devices while maintaining visual fidelity with the provided Figma design.

## Live Demo

[View Live Demo](https://your-github-username.github.io/product-listing-website/)

## Features

- **Pixel-Perfect Implementation**: Meticulously crafted to match the provided Figma design
- **Fully Responsive Layout**:
  - Desktop view: 4 product cards per row
  - Mobile view: 2 product cards per row with appropriate scaling
- **Dynamic Content Loading**: "Scroll More" button loads 12 additional product cards without page refresh
- **Modern UI Elements**:
  - Smooth hover effects and transitions
  - Optimized imagery and icons
  - Consistent spacing and typography
- **Performance Optimized**: Fast loading with minimal dependencies

## Technologies Used

- HTML5
- CSS3 (with custom variables for theming)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Poppins)

## Project Structure

```
project-root/
│
├── index.html                # Main HTML document
├── README.md                 # Project documentation
│
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   ├── responsive.css    # Media queries for responsiveness
│   │   └── variables.css     # CSS variables for theming
│   │
│   ├── js/
│   │   ├── main.js           # Core functionality   
│   │            
│
└── .gitignore                # Git ignore file


## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DHRUVKUMARMAHESHWARI/YourShirts
   cd ________
   ```

2. **Open the project**
   - Simply open `index.html` in your browser to view the project locally
   - No build process or dependencies required

3. **Development**
   - For local development, you can use a simple server like Live Server in VS Code
   - The project uses vanilla HTML, CSS, and JavaScript with no build step

## Implementation Details

### Responsive Design Approach

The website uses a mobile-first approach with strategic breakpoints:
- **Mobile** (< 576px): 2 cards per row
- **Desktop** (> 992px): 4 cards per row

CSS custom properties (variables) are used throughout the project to maintain design consistency and facilitate theming.

### Dynamic Card Loading

The "Scroll More" button triggers a JavaScript function that:
1. Fetches additional product data
2. Creates and appends new product cards to the existing grid
3. Maintains the responsive layout and proper spacing
4. Implements smooth transitions when adding new content

### Performance Optimization

- JavaScript is modular and event-driven
- CSS is structured for minimal repaints and reflows
- Smooth scrolling is implemented with requestAnimationFrame

## Design Decisions

1. **Maintaining Design Fidelity**: Pixel-perfect implementation of the Figma design while ensuring flexibility across device sizes
2. **Accessible UI**: Focus states, appropriate contrast, and semantic HTML for better accessibility
3. **Clean Animation**: Subtle hover effects and transitions enhance user experience without being distracting
4. **Scalable Architecture**: Code organization that supports future feature additions

## Browser Compatibility

The website has been tested and works correctly on:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

Potential improvements for future iterations:
- Integration with a back-end API for dynamic product data
- Filter and sort functionality
- Product detail view
- Shopping cart functionality
- User authentication


## Contact

For any questions or feedback about this project, please contact:
- Dhruv kumar maheshwari
- dhruvmaheswari23@gmail.com
- [Your LinkedIn Profile](https://www.linkedin.com/in/dhruv-kumar-maheshwari-46b38a249/)
- [Your GitHub Profile](https://github.com/DHRUVKUMARMAHESHWARI)