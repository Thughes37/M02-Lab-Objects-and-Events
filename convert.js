document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const cInput = document.getElementById("cInput");
    const fInput = document.getElementById("fInput");
    const convertButton = document.getElementById("convertButton");
    const errorMessage = document.getElementById("errorMessage");
    const weatherImage = document.getElementById("weatherImage");

    // Input event handlers to clear opposing input field
    cInput.addEventListener("input", () => {
        fInput.value = "";
    });

    fInput.addEventListener("input", () => {
        cInput.value = "";
    });

   // Click event handler for the Convert button
    convertButton.addEventListener("click", () => {
    const celsiusValue = parseFloat(cInput.value);
    const fahrenheitValue = parseFloat(fInput.value);

    if (!isNaN(celsiusValue) && isNaN(fahrenheitValue)) {
        // Convert Celsius to Fahrenheit
        const convertedFahrenheit = convertCtoF(celsiusValue);
        fInput.value = convertedFahrenheit.toFixed(0); // Display with no decimal places
        showImage(convertedFahrenheit, weatherImage);
        errorMessage.innerHTML = "";
    } else if (isNaN(celsiusValue) && !isNaN(fahrenheitValue)) {
        // Convert Fahrenheit to Celsius
        const convertedCelsius = convertFtoC(fahrenheitValue);
        cInput.value = convertedCelsius.toFixed(0); // Display with no decimal places
        showImage(fahrenheitValue, weatherImage);
        errorMessage.innerHTML = "";
    } else {
        // Handle bad input
        errorMessage.innerHTML = "Invalid input. Enter a number in one of the fields.";
    weatherImage.src = "";
    }
});


}

// Function to convert Celsius to Fahrenheit
function convertCtoF(degreesCelsius) {
    return (degreesCelsius * 9 / 5 + 32);
}

// Function to convert Fahrenheit to Celsius
function convertFtoC(degreesFahrenheit) {
    return ((degreesFahrenheit - 32) * 5 / 9);
}
function showImage(tempInF, imageElement) {
    if (tempInF < 32) {
        imageElement.src = "cold.png";
    } else if (tempInF >= 32 && tempInF <= 50) {
        imageElement.src = "cool.png";
    } else {
        imageElement.src = "warm.png";
    }
}