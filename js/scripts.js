var checkInput = function(input) {
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      $("#output").append("<li>PingPong</li>");
    } else if ( i % 5 === 0) {
      $("#output").append("<li>Pong</li>");
    } else if (i % 3 === 0) {
      $("#output").append("<li>Ping</li>");
    } else {
      $("#output").append("<li>" + i + "</li>");
    }
  }
};

$(document).ready(function() {
  $("#ping-pong").submit(function(event) {
    event.preventDefault();

    $("#output").empty('');
    var userInput = $("#input").val();
    checkInput(userInput);

  });
});
