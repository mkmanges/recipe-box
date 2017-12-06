const fs = require('fs');

// dump is used debugging function for viewing data
exports.dump = obj => JSON.stringify(obj, null, 2);

// site details
exports.siteName = 'Recipe Box';

// main food categories
exports.categories = ['Appetizer', 'Side', 'Main Dish', 'Dessert', 'Gluten-free', 'Keto'];
