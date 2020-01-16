$(document).ready(function(){
  $("#survey").submit(function(){

    var nameInput = $("#name").val();
    var ageInput = $("#age").val();
    var drinkInput = $("#beverage").val();
    var iceCreamInput = $("input:radio[name=flavor]:checked").val();
    var colorInput = $("#color").val();
    var dateInput = $("#date").val();
    var gameInput = $("#game").val();

    $(".name").append(nameInput);
    $(".age").append(ageInput);
    $(".beverage").append(drinkInput);
    $(".iceCream").append(iceCreamInput);
    $(".color").append(colorInput);
    $(".date").append(dateInput);
    $(".game").append(gameInput);

    $(".submitMessage").slideDown();

    event.preventDefault();

    $(".btn").attr("disabled", true);
  });
});