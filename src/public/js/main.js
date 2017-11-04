function process_symptoms() {

  var query = "";
  var symptoms = document.forms.symptom_form
  var len = document.forms.symptom_form.length;
  for (var i = 0; i < len; i++){
    if (symptoms[i].checked !== false){
      query += " " + symptoms[i].value;
    }
  }
  console.log(query);

  document.getElementById("searchBox").value = query;

  search.helper.setQuery(query).search()
}

function getWalgreensStores(lat, lon) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "http://api.walmartlabs.com/v1/stores?format=json&lat=" + lat + "&lon=" + lon + "&apiKey=naspavnz73yh9yh7cy7qubw6", true);
  xhr.send();
  xhr.onreadystatechange = processRequest;
 
}

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var response = JSON.parse(xhr.responseText);
    alert(response);  
  }
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}