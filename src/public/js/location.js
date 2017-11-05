/*References:
http://www.w3schools.com/html/html5_geolocation.asp
http://wiki.openstreetmap.org/wiki/Nominatim*/
var x = document.getElementById("currentLocation");
function getLocation() {
    // navigator is provided by DOM : latitude and longitude
    if (navigator.geolocation) {
        // showPosition is callback function: getCurrentPosition passes position (aka event handler)
        navigator.geolocation.getCurrentPosition(showPosition);
        // Don't need to have your owns web server, since we are using openstreetmap
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var xhttp = new XMLHttpRequest();

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

    refreshMap(position);

    xhttp.addEventListener("load", transferComplete);
    xhttp.addEventListener("error", error);

    xhttp.open("GET", "http://nominatim.openstreetmap.org/reverse?" +
        "format=json&lat=" + position.coords.latitude + "&lon=" + position.coords.longitude);
    xhttp.send();

    function transferComplete() {
        var data = JSON.parse(xhttp.response);
        xhttp_response_data = data;
        if (data.address.house_number) {
            document.getElementById('address').value = data.address.house_number + " ";
        }
        document.getElementById('address').value += data.address.road;
        document.getElementById('city').value = (data.address.town) ? data.address.town : data.address.city;
        document.getElementById('state').value = data.address.state;
        document.getElementById('zip').value = data.address.postcode;
        document.getElementById("geolocation").innerHTML = xhttp.response;
    }
    function error() {
        console.log(xhttp.readyState);
        console.log(xhttp.status);
    }
}
document.getElementById("autoFill").addEventListener('click', getLocation);

/*Google Maps API: https://developers.google.com/maps/documentation/javascript/tutorial*/
var map;
var marker;
var infowindow;
var currentLocation;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 39, lng: -72.5261544 },
        zoom: 15
    });

    marker = new google.maps.Marker({
        position: { lat: 39, lng: -72.5261533 },
        map: map,
        title: 'Hello World!'
    });
}

function refreshMap(position) {
    currentLocation = position;
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 8
    });

    marker = new google.maps.Marker({
        position: { lat: position.coords.latitude, lng: position.coords.longitude },
        map: map,
        title: 'Hello World!'
    });

}

document.getElementById("findPharmacy").addEventListener('click', findPharmacy);

function findPharmacy() {
    getLocation();
    infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: { lat: currentLocation.coords.latitude, lng: currentLocation.coords.longitude },
        radius: 100000,
        type: ['pharmacy']
    }, callback);
}

function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            'Address: ' +
            place.vicinity + '</div>');
        infowindow.open(map, this);
    });
}