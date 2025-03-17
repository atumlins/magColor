// Get color picker elements
const colorPickerFr = document.getElementById('colorPickerFr');
const colorPickerMagUL = document.getElementById('colorPickerUL');
const colorPickerMagUR = document.getElementById('colorPickerUR');
const colorPickerMagBL = document.getElementById('colorPickerBL');
const colorPickerMagBR = document.getElementById('colorPickerBR');
const colorPickerSph = document.getElementById('colorPickerSph');

// Get SVG elements (replace with your actual IDs)
const partLegs = document.getElementById('frameLegs');
const partCore = document.getElementById('frameCore');
const partMagUL = document.getElementById('magUL');
const partMagUR = document.getElementById('magUR');
const partMagBL = document.getElementById('magBL');
const partMagBR = document.getElementById('magBR');
const partSph = document.getElementById('sph');

// Add event listeners to color pickers
colorPickerFr.addEventListener('input', function () {
    partLegs.setAttribute('fill', colorPickerFr.value);
    partCore.setAttribute('fill', colorPickerFr.value);
});

colorPickerMagUL.addEventListener('input', function () {
    partMagUL.setAttribute('fill', colorPickerMagUL.value);
});

colorPickerMagUR.addEventListener('input', function () {
    partMagUR.setAttribute('fill', colorPickerMagUR.value);
});

colorPickerMagBL.addEventListener('input', function () {
    partMagBL.setAttribute('fill', colorPickerMagBL.value);
});

colorPickerMagBR.addEventListener('input', function () {
    partMagBR.setAttribute('fill', colorPickerMagBR.value);
});

colorPickerSph.addEventListener('input', function () {
    partSph.setAttribute('fill', colorPickerSph.value);
});
