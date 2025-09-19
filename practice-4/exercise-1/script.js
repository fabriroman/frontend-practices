function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function calcPrecipitation(hours, localtime) {
    const currentHour = new Date(localtime).getHours();
    return hours[currentHour].chance_of_rain;
}

async function loadWeather(city) {
    const spinner = document.getElementById('loadingSpinner');
    const weatherCard = document.querySelector('.weather-card-container');
    
    spinner.style.display = 'flex';
    weatherCard.style.display = 'none';
    
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1`);
        const data = await response.json();

        const cityElement = document.getElementById('city');
        cityElement.textContent = data.location.name;

        const timeElement = document.getElementById('time');
        timeElement.textContent = formatDateTime(data.location.localtime);

        const iconElement = document.getElementById('icon');
        iconElement.src = data.current.condition.icon;

        const tempValueElement = document.getElementById('tempValue');
        tempValueElement.textContent = data.current.temp_c;

        const precipElement = document.getElementById('precip');
        precipElement.textContent = calcPrecipitation(data.forecast.forecastday[0].hour, data.location.localtime) + '%';

        const humidityElement = document.getElementById('humidity');
        humidityElement.textContent = `${data.current.humidity}%`;

        const windElement = document.getElementById('wind');
        windElement.textContent = `${data.current.wind_kph} km/h`;

        const descElement = document.getElementById('desc');
        descElement.textContent = data.current.condition.text;
        
        spinner.style.display = 'none';
        weatherCard.style.display = 'flex';
        
    } catch (error) {
        console.error('Error:', error);
        spinner.style.display = 'none';
        weatherCard.style.display = 'flex';
    }
}

function initApp() {
    const citySelect = document.getElementById('citySelect');
    
    loadWeather(citySelect.value);
    
    citySelect.addEventListener('change', (event) => {
        loadWeather(event.target.value);
    });
}

document.addEventListener('DOMContentLoaded', initApp);