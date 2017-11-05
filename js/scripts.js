// user interface logic

$(document).ready(function(){
  $("#button").click(function(){
    var countInput = parseInt($("input#count").val());

    pingpong(countInput);

    pinpongedNumbers.forEach(function(countInput) {
        $("#list").append("<li>"+ countInput +"</li>");
        });
          });
          });

// business logic
var pinpongedNumbers = [];

function pingpong(countInput) {
    for (var x = 1; x <= countInput; x += 1)
    if (x % 15 === 0) {
      pinpongedNumbers.push("pingpong");
    }
    else if (x % 5 === 0) {
      pinpongedNumbers.push("pong");
    }
    else if (x % 3 === 0) {
      pinpongedNumbers.push("ping");
    }
    else {
    pinpongedNumbers.push(x);
    }
    }
