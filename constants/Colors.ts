const primaryGreen = '#4CAF50';
const secondaryGreen = '#81C784';
const neutralWhite = '#FFFFFF';
const neutralGray = '#F5F5F5';
const textBlack = '#212121';

export default {
  light: {
    text: textBlack, // Main text color
    background: neutralGray, // Background color
    tint: primaryGreen, // Tint for selected items (e.g., active tabs)
    tabIconDefault: '#CCC', // Default tab icon color
    tabIconSelected: primaryGreen, // Selected tab icon color
    primary: primaryGreen, // Main action color
    secondary: secondaryGreen, // Secondary action color
    cardBackground: neutralWhite, // Background for cards or highlights
  },
  dark: {
    text: neutralWhite,
    background: '#000',
    tint: primaryGreen,
    tabIconDefault: '#CCC',
    tabIconSelected: primaryGreen,
    primary: primaryGreen,
    secondary: secondaryGreen,
    cardBackground: '#333', // Example for a dark theme
  },
};
