$('.user-map-trigger').leanModal();

var map,
    geoKeyBrowser = ($('#user-location-modal').data('name'));


function initUserMap() {
  var latitude, longitude;
  $('.user-map-trigger').on('click', function() {
      latitude = $(this).data("latitude")
      longitude = $(this).data("longitude")
      theMap({
          latitude: latitude,
          longitude: longitude
      })
  });

  function theMap(coords) {
    map = new google.maps.Map(document.getElementById('user-map'), {
        center: {
            lat: coords.latitude,
            lng: coords.longitude
        },
        zoom: 8
    });
  }
}

if (document.getElementById('user-map')) {
    loadScript('<script src="https://maps.googleapis.com/maps/api/js?key=' + geoKeyBrowser + '&callback=initUserMap" async defer></script>');
}