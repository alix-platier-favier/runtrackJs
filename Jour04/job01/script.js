
$(document).ready(function() {
    let button = document.createElement("button");
    button.innerHTML = "expression";
    document.body.appendChild(button);

    let paragraph = document.createElement("p");
    
    button.addEventListener("click", function() {
        fetch("expression.txt")
        .then(response => response.text())  
        .then(text => {
            paragraph.textContent = text;
            document.body.appendChild(paragraph);
        })
    });
});