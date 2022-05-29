let weather = {
    "apiKey" : "aab771b935cd2d6ba134a5bcccb62784",
    fetchWeather: function (city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='
        +city+
        '&units=metric&appid='
        +this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".weather .city").innerText = "Weather in "+name ;
        document.querySelector(".weather .temp").innerText = temp+'°C';
        document.querySelector(".weather .description").innerText = description;
        document.querySelector(".weather .humidity").innerText = "Humidity : "+humidity+'%';
        document.querySelector(".weather .wind").innerText = "Wind speed : "+speed+'km/h';
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search : function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", ()=>{
    weather.search();
});

document.querySelector(".search .search-bar").addEventListener("keyup", (event)=>{
    if (event.key == "Enter"){weather.search();}
});


weather.fetchWeather("Yangon");
      