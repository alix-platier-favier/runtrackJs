function filterData() {
    let id = document.getElementById("id").value;
    let nom = document.getElementById("nom").value;
    let type = document.getElementById("type").value;

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            let filteredData = data.filter(item => {
                if (id && item.id !== id) {
                    return false;
                }
                if (nom && item.nom !== nom) {
                    return false;
                }
                if (type && item.type !== type) {
                    return false;
                }
                return true;
            });

            let resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";

            if (filteredData.length) {
                filteredData.forEach(item => {
                    let resultItem = document.createElement("p");
                    resultItem.textContent = "ID: " + item.id + ", Nom: " + item.nom + ", Type: " + item.type;
                    resultsDiv.appendChild(resultItem);
                });
            } else {
                resultsDiv.textContent = "Aucun résultat trouvé.";
            }
        })
        .catch(error => {
            console.error('Une erreur s\'est produite:', error);
        });
}

$(document).ready(function() {
    $('button').on('click', function() {
        filterData();
    });
});
