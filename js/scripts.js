// user interface logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul#list").empty();
// empty pinpongedNumbers
    // pinpongedNumbers.empty();

    var countInput = parseInt($("input#count").val());

    var pinpongedNumbers =  pingpong(countInput);

    pinpongedNumbers.forEach(function(countInput) {
      $("#list").append("<li>" + countInput + "</li>");
    });
  });
});

// business logic

function pingpong(countInput) {
  var results = [];
  for (var x = 1; x <= countInput; x += 1)
    if (x % 15 === 0) {
      results.push("pingpong");
    }
  else if (x % 5 === 0) {
    results.push("pong");
  } else if (x % 3 === 0) {
    results.push("ping");
  } else {
    results.push(x);
  }

  return results;
}
