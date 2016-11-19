// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Los Angeles, CA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html =  weather.city + ', ' + weather.region + '.&nbsp;' + weather.temp + '&deg;' + weather.units.temp + '&nbsp;/&nbsp' + weather.alt.temp + '&deg;C';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>' + error + '</p>');
    }
  });
});