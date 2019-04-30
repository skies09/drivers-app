
 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 53.4961, lng: -2.5187}
        });

        var labels = '123456';

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: 53.586381, lng: -2.421637},
        {lat: 53.4858, lng: -2.3836},
        {lat: 53.5451, lng: -2.3836},
        {lat: 53.4563, lng: -2.7371},
        {lat: 53.5857, lng: -2.4226},
        {lat: 53.4084, lng: -2.9916},
       
   
  
      ]