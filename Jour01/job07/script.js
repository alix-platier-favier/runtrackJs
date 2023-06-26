const jourDeTravail = (jour, mois, annee) => {
    const jourFeries2020 = [
        new Date(2020, 0, 1),   // Jour de l'An
        new Date(2020, 3, 10),  // Vendredi saint
        new Date(2020, 4, 1),   // Fête du Travail
        new Date(2020, 4, 8),   // Victoire 1945
        new Date(2020, 5, 21),  // Fête de la Musique
        new Date(2020, 6, 14),  // Fête Nationale
        new Date(2020, 7, 15),  // Assomption
        new Date(2020, 10, 1),  // Toussaint
        new Date(2020, 10, 11), // Armistice 1918
        new Date(2020, 11, 25), // Noël
      ];
    let date = new Date(annee, mois - 1, jour);
    let jourSemaine = date.getDay();
    if (jourSemaine == 0 || jourSemaine == 6) { 
        return "Non, " + jourDeTravail + "est un week-end";
    } else if (jourFeries2020.some(jourFerie => jourFerie.getTime() === date.getTime())) {
        return "Le " + jourDeTravail + "est un jour férié";
    } else {
        return "Oui, " + jourDeTravail + "est un jour de travail";
    }
}

console.log(jourDeTravail(1, 2, 2020));
console.log(jourDeTravail(25, 11, 2020));
console.log(jourDeTravail(4, 7, 2020));