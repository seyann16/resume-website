// Get DOM elements
const colorBox = document.getElementById('colorBox');
const currentColorDisplay = document.getElementById('currentColor');
const randomColorBtn = document.getElementById('randomColor');
const redColorBtn = document.getElementById('redColor');
const blueColorBtn = document.getElementById('blueColor');
const greenColorBtn = document.getElementById('greenColor');
const purpleColorBtn = document.getElementById('purpleColor');
const resetColorBtn = document.getElementById('resetColor');

// Function to generate random hex color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i =0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to update color display
function updateColorDisplay(color) {
    colorBox.style.backgroundColor = color;
    currentColorDisplay.textContent = color;

    // Change text color based on background brightness
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate brightness (perceived luminance)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    colorBox.style.color = brightness > 128 ? 'black' : 'white';
}

// Event listeners for buttons
randomColorBtn.addEventListener('click', function() {
    const randomColor = getRandomColor();
    updateColorDisplay(randomColor);
});

redColorBtn.addEventListener('click', function() {
    updateColorDisplay('#e74c3c');
});

blueColorBtn.addEventListener('click', function() {
    updateColorDisplay('#3498db');
});

greenColorBtn.addEventListener('click', function() {
    updateColorDisplay('#2ecc71');
});

purpleColorBtn.addEventListener('click', function() {
    updateColorDisplay('#9b59b6');
});

resetColorBtn.addEventListener('click', function() {
    updateColorDisplay('#3498db');
});