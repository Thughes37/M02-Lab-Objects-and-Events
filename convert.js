<!DOCTYPE html>
<html>
<head>
    <title>Temperature Converter</title>
</head>
<body>
    <h1>Temperature Converter</h1>
    <label for="cInput">Celsius:</label>
    <input type="text" id="cInput">
    <label for="fInput">Fahrenheit:</label>
    <input type="text" id="fInput">
    <button id="convertButton">Convert</button>
    <p id="errorMessage"></p>
    <img id="weatherImage" src="" alt="Weather Image">

    <script>
        function convertCtoF(celsius) {
            return celsius * 9/5 + 32;
        }

        function convertFtoC(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }

        function domLoaded() {
            const cInput = document.getElementById('cInput');
            const fInput = document.getElementById('fInput');
            const convertButton = document.getElementById('convertButton');
            const errorMessage = document.getElementById('errorMessage');
            const weatherImage = document.getElementById('weatherImage');

            cInput.addEventListener('input', function() {
                fInput.value = '';
            });

            fInput.addEventListener('input', function() {
                cInput.value = '';
            });

            convertButton.addEventListener('click', function() {
                if (cInput.value !== '') {
                    const celsius = parseFloat(cInput.value);
                    if (!isNaN(celsius)) {
                        fInput.value = convertCtoF(celsius);
                        errorMessage.innerHTML = '';
                    } else {
                        errorMessage.innerHTML = cInput.value + ' is not a number';
                    }
                } else if (fInput.value !== '') {
                    const fahrenheit = parseFloat(fInput.value);
                    if (!isNaN(fahrenheit)) {
                        cInput.value = convertFtoC(fahrenheit);
                        errorMessage.innerHTML = '';
                    } else {
                        errorMessage.innerHTML = fInput.value + ' is not a number';
                    }
                }

                const fahrenheitValue = parseFloat(fInput.value);
                if (!isNaN(fahrenheitValue)) {
                    if (fahrenheitValue < 32) {
                        weatherImage.src = 'cold.png';
                    } else if (fahrenheitValue <= 50) {
                        weatherImage.src = 'cool.png';
                    } else {
                        weatherImage.src = 'warm.png';
                    }
                }
            });
        }

        document.addEventListener('DOMContentLoaded', domLoaded);
    </script>
</body>
</html>
