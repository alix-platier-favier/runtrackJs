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
    $(".empty-container").droppable({
      accept: ".container .rainbow-image",
      drop: function(_, ui) {
        var draggable = ui.draggable;
        var droppable = $(this);
  
        if (!droppable.find(".rainbow-image").length) {
          draggable.appendTo(droppable);
          draggable.position({ of: droppable, my: "center", at: "center" });
        } else {
          draggable.appendTo(".container");
        }
      }
    });
  }

  function checkImageOrder() {
    var ordered = true;
    var slots = $(".empty-container").children();

    slots.each(function(index) {
      var slotIndex = index + 1;
      var expectedAlt = "arc" + slotIndex + ".png";
      var imageAlt = $(this).find(".rainbow-image").attr("alt");

      if (expectedAlt !== imageAlt) {
        ordered = false;
        return false;
      }
    });

    var message = $(".message");
    message.text(ordered ? "Vous avez gagné" : "Vous avez perdu").css("color", ordered ? "green" : "red");
  }

  $(".btn").click(function() {
    shuffleImages();
    checkImageOrder();
  });

  makeImagesDraggable();
  makeSlotsDroppable();
});
