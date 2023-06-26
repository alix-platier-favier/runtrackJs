function estNombrePremier(n) {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
  
  function sommenombrespremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
      var c = a + b;
      console.log(c)
    } else {
        console.log("je n'additionner que des premiers")
        return false;
    }
  }
sommenombrespremiers(2,2);
sommenombrespremiers(2,3);
sommenombrespremiers(2,4);
sommenombrespremiers(2,5);
sommenombrespremiers(2,6);
