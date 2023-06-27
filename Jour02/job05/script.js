document.addEventListener("keydown", function(event) {
  var keylogger = document.getElementById("keylogger");

  if (event.key.match(/[a-z]/i)) {
    var letter = event.key.toLowerCase();
    var currentValue = keylogger.value;

    (document.activeElement === keylogger)
      keylogger.value = currentValue + letter;
  }
});
