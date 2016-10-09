var checkInput = function(input) {
  for (var i = 1; i <= input; i++); {
    if (i % 15 === 0) {
      $("#output").show("<li>PingPong</li>");
    } else if ( i % 5 === 0) {
      $("#output").show("<li>Pong</li>");
    } else if (i % 3 === 0) {
      $("#output").show("<li>Ping</li>");
    } else
      $("#output").show("<li>i</li>");
  }
};

$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();

    $("#output").html('');

    var userInput = $("#input").val();


    checkInput(userInput);


  });
});
