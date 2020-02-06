//---------------_______________---------------Variables---------------_______________---------------
var secondsRemaining = 15;
var randomPokeIndex = Math.floor(Math.random() * 151 + 1);
var tempPokemon = "https://pokeapi.co/api/v2/pokemon/" + randomPokeIndex;
var pokeName = "";
var statusToggle = document.querySelector("#statusToggle");
var toggleSpan = document.querySelector("#status");
var pokeImage = document.querySelector("#pic");
//ajax call for pokemon
$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function(response) {

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
  var ingredient1 = response.drinks[0].strIngredient1
  var ingredient2 = response.drinks[0].strIngredient2
  var ingredient3 = response.drinks[0].strIngredient3
  var ingredient4 = response.drinks[0].strIngredient4
  var ingredient5 = response.drinks[0].strIngredient5
  var ingredient6 = response.drinks[0].strIngredient6
  var ingredient7 = response.drinks[0].strIngredient7
  var ingredient8 = response.drinks[0].strIngredient8
  var ingredient9 = response.drinks[0].strIngredient9
  var ingredient10 = response.drinks[0].strIngredient10
  var ingredient11 = response.drinks[0].strIngredient11
  var ingredient12 = response.drinks[0].strIngredient12
  var ingredient13 = response.drinks[0].strIngredient13
  var ingredient14 = response.drinks[0].strIngredient14
  var ingredient15 = response.drinks[0].strIngredient15
  var measure1 = response.drinks[0].strMeasure1
  var measure2 = response.drinks[0].strMeasure2
  var measure3 = response.drinks[0].strMeasure3
  var measure4 = response.drinks[0].strMeasure4
  var measure5 = response.drinks[0].strMeasure5
  var measure6 = response.drinks[0].strMeasure6
  var measure7 = response.drinks[0].strMeasure7
  var measure8 = response.drinks[0].strMeasure8
  var measure9 = response.drinks[0].strMeasure9
  var measure10 = response.drinks[0].strMeasure10
  var measure11 = response.drinks[0].strMeasure11
  var measure12 = response.drinks[0].strMeasure12
  var measure13 = response.drinks[0].strMeasure13
  var measure14 = response.drinks[0].strMeasure14
  var measure15 = response.drinks[0].strMeasure15


});
//ajax call settings for cocktail
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
function  haveADrink(){
  $.ajax(settings).done(function (response) {
    console.log(response);
    var randomDrink = response.drinks[0].strDrink
    var randomDrinkImage = response.drinks[0].strDrinkThumb
    var ingredient1 = response.drinks[0].strIngredient1
    var ingredient2 = response.drinks[0].strIngredient2
    var ingredient3 = response.drinks[0].strIngredient3
    var ingredient4 = response.drinks[0].strIngredient4
    var ingredient5 = response.drinks[0].strIngredient5
    var ingredient6 = response.drinks[0].strIngredient6
    var ingredient7 = response.drinks[0].strIngredient7
    var ingredient8 = response.drinks[0].strIngredient8
    var ingredient9 = response.drinks[0].strIngredient9
    var ingredient10 = response.drinks[0].strIngredient10
    var ingredient11 = response.drinks[0].strIngredient11
    var ingredient12 = response.drinks[0].strIngredient12
    var ingredient13 = response.drinks[0].strIngredient13
    var ingredient14 = response.drinks[0].strIngredient14
    var ingredient15 = response.drinks[0].strIngredient15
    var measure1 = response.drinks[0].strMeasure1
    var measure2 = response.drinks[0].strMeasure2
    var measure3 = response.drinks[0].strMeasure3
    var measure4 = response.drinks[0].strMeasure4
    var measure5 = response.drinks[0].strMeasure5
    var measure6 = response.drinks[0].strMeasure6
    var measure7 = response.drinks[0].strMeasure7
    var measure8 = response.drinks[0].strMeasure8
    var measure9 = response.drinks[0].strMeasure9
    var measure10 = response.drinks[0].strMeasure10
    var measure11 = response.drinks[0].strMeasure11
    var measure12 = response.drinks[0].strMeasure12
    var measure13 = response.drinks[0].strMeasure13
    var measure14 = response.drinks[0].strMeasure14
    var measure15 = response.drinks[0].strMeasure15
  
    $("#pic").attr("src", randomDrinkImage);
    $("#hiddenH4").text(randomDrink);
    $("#hiddenH4").show();
    $("#name").text("mix: " + measure1 + " of " + ingredient1 + "; " + measure2 + " of " + ingredient2 + "; " + measure3 + " of " + ingredient3 + "; " + measure4 + " of " + ingredient4 + "; " + measure5 + " of " + ingredient5 + "; " + measure6 + " of " + ingredient6 + "; " + measure7 + " of " + ingredient7 + "; " + measure8 + " of " + ingredient8 + "; " + measure9 + " of " + ingredient9 + "; " + measure10 + " of " + ingredient10 + "; " + measure11 + " of " + ingredient11 + "; " + measure12 + " of " + ingredient12 + "; " + measure13 + " of " + ingredient13 + "; " + measure14 + " of " + ingredient14 + "; " + measure15 + " of " + ingredient15);
  });
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

//this function will only run if kid friendly toggle is switched to "No"
function beerTime() {
  if (status === "No") {
    //Run cocktail API after wrong answer
    haveADrink();
  }
}

//Event Listener for starting game
$("#start-quiz").on("click", function() {
  startGame();
  $("#start-quiz").attr("style", "display: none");
  $("#quiz").attr("style", "display: block");
  $(".shown").hide();
  //This limits the amount of charcters the user can input to match the size of the pokemon name
  $("#answer").attr("maxlength", pokeName.length);
});

$("#submit").on("click", function() {
  var submittedAnswer = $("#answer").val();

  //This makes the input lowercase for easily checking the user answer
  submittedAnswer = submittedAnswer.toLowerCase();

  if (submittedAnswer === pokeName) {

    //Removes the shake animation when the input is correct
    pokeImage.classList.remove("apply-shake");
    stopGame();
    $("#pic").attr("src", "assets/Pokeballimg.png");
    pokeImage.classList.add("apply-shake");

  } else {
    M.toast({
      html: "It wasn't very effective..."
    })
    pokeImage.classList.add("apply-shake");
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
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    pokeImage.classList.remove("apply-shake");
    // timer will run until it reaches 0 seconds or all questions are answered
    if (secondsRemaining > 0) {
      $("#timer").text(secondsRemaining);
      $("#gameTimer").attr("value", secondsRemaining);
    }
    //once time reaches 0, the
    else {
      stopGame();
      clearInterval(timerInterval);
      // currentScore = 0
      $(".hidden").hide();
      $(".shown").show();
      //removes the shake animation when the timer reaches 0
      pokeImage.classList.remove("apply-shake");
    }
  }, 1000);
} //---------------End of startGame function--------------

statusToggle.addEventListener("change", toggleStatus);
