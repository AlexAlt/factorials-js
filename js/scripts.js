var factorial = function(number) {
  var result = 1;

  for (var index = 1; index <= number; index += 1) {
    if (number === 0) {
      result;
    }
    else if (number !== 0) {
      result = index * result;
    }
  }
  return result;
};

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".factorial").text(result);

    $("#result").show()
    event.preventDefault();
  })
})
