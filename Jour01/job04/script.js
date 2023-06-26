
window.onload = function() {
    let annee = 2024;
    let Bissextile = bisextile(annee);
    console.log(Bissextile);
}; 

function bisextile(annee) {
    if (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
