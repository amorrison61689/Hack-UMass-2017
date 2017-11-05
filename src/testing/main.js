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