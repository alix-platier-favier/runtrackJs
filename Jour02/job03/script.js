document.addEventListener("DOMContentLoaded", function() {
    let compteur = 0;
    let button = document.getElementById("button");
    let compteurElement = document.getElementById("compteur");
  
    button.addEventListener("click", addone);
  
    function addone() {
      compteur += 1;
      compteurElement.textContent = compteur.toString();
    }
  });
  