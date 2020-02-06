//---------------_______________---------------Variables---------------_______________---------------
var secondsRemaining = 15;
var randomPokeIndex = Math.floor((Math.random() * 151) + 1)
var tempPokemon = "https://pokeapi.co/api/v2/pokemon/" + randomPokeIndex;
var pokeName = "";
var statusToggle = document.querySelector("#statusToggle");
var toggleSpan = document.querySelector("#status");
//ajax call for pokemon
$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function (response) {
  console.log(response);

  pokeName = response.name
  $("#pic").attr("src", response.sprites.front_default);
  $("#name").text(pokeName);
});
//ajax call for cocktail
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://the-cocktail-db.p.rapidapi.com/random.php",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
    "x-rapidapi-key": "ca6e01789emsh0efb5a3c9026fb0p14049fjsn4a80f2b8c012"
  }
}
$.ajax(settings).done(function (response) {
  console.log(response);
  var randomDrink = response.drinks[0].strDrink
  console.log(randomDrink)
  var randomDrinkImage = response.drinks[0].strDrinkThumb
  console.log(randomDrinkImage)
});
//this function will only run if kid friendly toggle is switched to "No"
function beerTime() {
  if (status === "No") {
    //Run cocktail API after wrong answer
  }
}
//this will change the status text based on the check box status
function toggleStatus(event) {
  var checked = event.target.checked;

  if (checked) {
    status = "Yes";
  } else {
    status = "No";
  }
  toggleSpan.textContent = status;
}

//Event Listener for starting game
$("#start-quiz").on("click", function () {

  startGame();
  $("#start-quiz").attr("style", "display: none");
  $("#quiz").attr("style", "display: block");
  //This limits the amount of charcters the user can input to match the size of the pokemon name
  $("#answer").attr("maxlength", pokeName.length);
});

$("#submit").on("click", function () {

  var submittedAnswer = $("#answer").val();

  //This makes the input lowercase for easily checking the user answer
  submittedAnswer = submittedAnswer.toLowerCase();

  if (submittedAnswer === pokeName) {
    console.log("you win!");

  } else {
    M.toast({
      html: "It wasn't very effective..."
    })
  }



})

function stopGame() {
  $("#timer").text(0);
  $("#gameTimer").attr("value", 0);
  secondsRemaining = null;
}


//game starts here ----------------------------------------------------------------------------------
function startGame() {
  // questions and timer appear below start button
  $(".hidden").show();
  //timer will start counting down from 15 seconds and continue until time runs out or all questions answered
  secondsRemaining = 15;
  var timerInterval = setInterval(function () {
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
      // currentScore = 0
      $(".hidden").hide();

    }
  }, 1000);
} //---------------End of startGame function--------------

statusToggle.addEventListener("change", toggleStatus);