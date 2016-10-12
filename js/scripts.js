var checkInput = function(input) {
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      // console.log('<li>PingPong</li>')
      $("#output").append("<li>PingPong</li>");
    } else if ( i % 5 === 0) {
      // console.log('<li>Pong</li>')
      $("#output").append("<li>Pong</li>");
    } else if (i % 3 === 0) {
      // console.log('<li>Ping</li>')
      $("#output").append("<li>Ping</li>");
    } else {
    // console.log('<li>i</li>')
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
