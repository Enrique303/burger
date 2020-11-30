// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eaten").on("click", function(event) {
    var burger_id = $(this).children(".burger_id").val()
    var devoured = $(this).children(".burger_id").attr("data-devoured")
    devoured = devoured === "0" ? 1 : 0

    // Send the PUT request.
    $.ajax("/api/burger/" + burger_id, {
      type: "PUT",
      data: {devoured:devoured}
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#enter_text").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
