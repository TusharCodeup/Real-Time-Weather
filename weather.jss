
function searchWeather() {
    const location = document.getElementById("locationInput").value.trim();
    if (!location) {
        alert("Please enter a valid city name!");
        return;
    }

    
    const apiKey = "6a322040b5f44397bc681830253103";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("locationName").innerText = `📍 ${data.location.name}, ${data.location.country}`;
            document.getElementById("time").innerText = data.location.localtime;
            document.getElementById("temperature").innerText = data.current.temp_c;
            document.getElementById("condition").innerText = data.current.condition.text;
            document.getElementById("humidity").innerText = data.current.humidity;
            document.getElementById("windSpeed").innerText = data.current.wind_kph;
            document.getElementById("windDir").innerText = data.current.wind_dir;
            document.getElementById("feelsLike").innerText = data.current.feelslike_c;
            document.getElementById("uvIndex").innerText = data.current.uv;
        })
        .catch(error => alert("City not found!"));
}


function toggleTemperature() {
    const isChecked = document.getElementById("tempToggle").checked;
    const tempElement = document.getElementById("temperature");
    const feelsLikeElement = document.getElementById("feelsLike");

    let tempValue = parseFloat(tempElement.innerText); // Extract numerical value
    let feelsLikeValue = parseFloat(feelsLikeElement.innerText);

    if (isChecked) {
        
        tempElement.innerText = `${(tempValue * 9/5 + 32).toFixed(1)}°F`;
        feelsLikeElement.innerText = `${(feelsLikeValue * 9/5 + 32).toFixed(1)}°F`;
    } else {
        
        tempElement.innerText = `${((tempValue - 32) * 5/9).toFixed(1)}°C`;
        feelsLikeElement.innerText = `${((feelsLikeValue - 32) * 5/9).toFixed(1)}°C`;
    }
}
