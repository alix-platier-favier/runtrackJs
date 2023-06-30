$(document).ready(function() {
  function shuffleImages() {
    var container = $(".container");
    container.append(container.children().sort(function() {
      return 0.5 - Math.random();
    }));
  }

  function makeImagesDraggable() {
    $(".container .rainbow-image").draggable({
      revert: "invalid",
      cursor: "move"
    });
  }

  function makeSlotsDroppable() {
    $(".slot").droppable({
      accept: ".container .rainbow-image",
      drop: function(_, ui) {
        var draggable = ui.draggable;
        var droppable = $(this);

        if (!droppable.find(".rainbow-image").length) {
          draggable.appendTo(droppable);
        } else {
          draggable.appendTo(".container");
        }

        draggable.css({ top: 0, left: 0 });
      }
    });
  }

// function checkImageOrder() {
//   var ordered = true;
//   var slots = $(".empty-container .slot");
//   var expectedIndex = 0;

//   slots.each(function() {
//     var expectedAlt = "arc" + (expectedIndex + 1) + ".png";
//     var imageAlt = $(this).find(".rainbow-image").attr("alt");

//     if (expectedAlt !== imageAlt) {
//       ordered = false;
//       return false;
//     }

//     expectedIndex++;
//   });

//   return ordered;
// }

  $(".btn").click(function() {
    shuffleImages();
    var isOrdered = checkImageOrder();
    var message = $(".message");
    message.text(isOrdered ? "Vous avez gagné" : "Vous avez perdu").css("color", isOrdered ? "green" : "red");
  });

  $(".btn").click(function() {
    shuffleImages();
    checkImageOrder();
  });

  makeImagesDraggable();
  makeSlotsDroppable();
});
