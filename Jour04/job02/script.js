$(document).ready(function() {
    function jsonValueKey(strjson, id) {
      let obj = JSON.parse(strjson);
  
      if (id in obj) {
        return obj[id];
      } else {
        return "error";
      }
    }
  
    let strjson = '{"name":"La Plateforme_", "address":"8 rue dhozier", "city":"Marseille", "nb_staff":"11", "creation":"2019"}';
  
    let id = "city";
    let value = jsonValueKey(strjson, id);
    console.log(value);
});

