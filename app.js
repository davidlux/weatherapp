var long;
var lat;
var weatherObj;
var temperature;
var backgrounds = [
	"sun.jpg",
	"lightclouds.jpg",
	"scatteredclouds.jpg",
	"brokenclouds.jpg",
	"rainy.jpg",
	"rain.jpg",
	"thunderstorm.jpg",
	"snow.jpg",
	"mist.jpg"
];


navigator.geolocation.getCurrentPosition(function(position) {

		long = position.coords.longitude;
		lat = position.coords.latitude;

		xmlC = new XMLHttpRequest();
		xmlC.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + long + '&units=metric&APPID=612c41eec942c41f1bf5d3566e1f5019', false);
		xmlC.send();

		weatherObj = JSON.parse(xmlC.responseText);
		temperatureC = Math.round(weatherObj.main.temp * 10) / 10;
		city = weatherObj.name;
		country = weatherObj.sys.country;
		state = weatherObj.weather[0].description;

		xmlF = new XMLHttpRequest();
		xmlF.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + long + '&units=imperal&APPID=612c41eec942c41f1bf5d3566e1f5019', false);
		xmlF.send(),

		weatherObjF = JSON.parse(xmlF.responseText);
		temperatureF = Math.round(weatherObjF.main.temp * 10) / 10;

		switch(state) {

			case "clear sky":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[0] + '")',
					'background-size': 'cover'
				});
				break;

			case "few clouds":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[1] + '")',
					'background-size': 'cover'
				});
				break;

			case "scattered clouds":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[2] + '")',
					'background-size': 'cover'
				});
				break;

			case "broken clouds":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[3] + '")',
					'background-size': 'cover'
				});
				break;

			case "shower rain":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[4] + '")',
					'background-size': 'cover'
				});
				break;

			case "rain":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[5] + '")',
					'background-size': 'cover'
				});
				break;

			case "thunderstorm":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[6] + '")',
					'background-size': 'cover'
				});
				break;

			case "snow":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[7] + '")',
					'background-size': 'cover'
				});
				break;

			case "mist":
				$('.weather-info').css({
					'background': 'url("img/' + backgrounds[8] + '")',
					'background-size': 'cover'
				});
				break;
		}



		$('.weather-temperature').html(temperatureC);
		$('.location').html(city + ", " + country);
		$('.state').html(state);

		$('.weather-unit').on('click', function(){
			if ($('.weather-unit').html() === "C") {
				$('.weather-temperature').html(temperatureF);
				$('.weather-unit').html("F");
			} else {
				$('.weather-temperature').html(temperatureC);
				$('.weather-unit').html("C");
			}
		});

});
