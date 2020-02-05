//Used for gettig random object drink

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
//         "x-rapidapi-key": "0dd8aec848msh789cce3c0ec7bd5p1717d6jsn46bdb806c904"
//     }
// }

//---------------_______________---------------Variables---------------_______________---------------
var secondsRemaining = 15;


// $.ajax(settings).done(function (response) {
//     console.log(response);
// });
var randomPokeIndex = Math.floor((Math.random() * 151) + 1)
var tempPokemon = "https://pokeapi.co/api/v2/pokemon/" + randomPokeIndex;

$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function(response) {
  console.log(response);

    $("#pic").attr("src", response.sprites.front_default);
    $("#name").text(response.name);
});
//game starts here ------
function startGame() {
  // questions and timer appear below start button
  $(".hidden").show();
  //timer will start counting down from 15 seconds and continue until time runs out or all questions answered
  secondsRemaining = 15;
  getFirstQuestion();
  var timerInterval = setInterval(function() {
      secondsRemaining--;
      // timer will run until it reaches 0 seconds or all questions are answered
      if (secondsRemaining > 0) {
          console.log(secondsRemaining);
          $("#timer").text(secondsRemaining);
          $("#gameTimer").attr("value", secondsRemaining);
      }
      //once time reaches 0, the 
      else {
          stopGame();
          clearInterval(timerInterval);
          getPlayerName();
          getScores();
          // currentScore = 0
          $(".hidden").hide();

      }
  }, 1000);
} //---------------End of startGame function--------------