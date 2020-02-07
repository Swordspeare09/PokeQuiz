//---------------_______________---------------Variables---------------_______________---------------
var secondsRemaining = 15;
var randomPokeIndex = Math.floor(Math.random() * 151 + 1);
var tempPokemon = "https://pokeapi.co/api/v2/pokemon/" + randomPokeIndex;
var pokeName = "";
var statusToggle = document.querySelector("#statusToggle");
var toggleSpan = document.querySelector("#status");
var pokeImage = document.querySelector("#pic");
var randomDrink;
var randomDrinkImage;
var mixList = []
var mix1;
var mix2;
var mix3;
var mix4;
var mix5;
var mix6;
var mix7;
var mix8;
var mix9;
var mix10;
var mix11;
var mix12;
var mix13;
var mix14;
var mix15;

//ajax call for pokemon
$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function (response) {

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

function haveADrink() {
  $.ajax(settings).done(function (response) {
    console.log(response);
    randomDrinkImage = response.drinks[0].strDrinkThumb
    randomDrink = response.drinks[0].strDrink
    $("#pic").attr("src", randomDrinkImage);
    $("#hiddenH4").text(randomDrink);
    $("#hiddenH4").show();
    mixList = []

    //Sorry, the free API is making this difficult!
    if (response.drinks[0].strMeasure1 && response.drinks[0].strIngredient1 !== null) {
      console.log(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1)
    } else if (response.drinks[0].strMeasure1 && response.drinks[0].strIngredient1 === null) {} else if (response.drinks[0].strMeasure1 === null && response.drinks[0].strIngredient1) {
      console.log("Add " + response.drinks[0].strIngredient1 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure2 && response.drinks[0].strIngredient2 !== null) {
      console.log(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2)
    } else if (response.drinks[0].strMeasure2 && response.drinks[0].strIngredient2 === null) {} else if (response.drinks[0].strMeasure2 === null && response.drinks[0].strIngredient2) {
      console.log("Add " + response.drinks[0].strIngredient2 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure3 && response.drinks[0].strIngredient3 !== null) {
      console.log(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3)
    } else if (response.drinks[0].strMeasure3 && response.drinks[0].strIngredient3 === null) {} else if (response.drinks[0].strMeasure3 === null && response.drinks[0].strIngredient3) {
      console.log("Add " + response.drinks[0].strIngredient3 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure4 && response.drinks[0].strIngredient4 !== null) {
      console.log(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4)
    } else if (response.drinks[0].strMeasure4 && response.drinks[0].strIngredient4 === null) {} else if (response.drinks[0].strMeasure4 === null && response.drinks[0].strIngredient4) {
      console.log("Add " + response.drinks[0].strIngredient4 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure5 && response.drinks[0].strIngredient5 !== null) {
      console.log(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5)
    } else if (response.drinks[0].strMeasure5 && response.drinks[0].strIngredient5 === null) {} else if (response.drinks[0].strMeasure5 === null && response.drinks[0].strIngredient5) {
      console.log("Add " + response.drinks[0].strIngredient5 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure6 && response.drinks[0].strIngredient6 !== null) {
      console.log(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6)
    } else if (response.drinks[0].strMeasure6 && response.drinks[0].strIngredient6 === null) {} else if (response.drinks[0].strMeasure6 === null && response.drinks[0].strIngredient6) {
      console.log("Add " + response.drinks[0].strIngredient6 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure7 && response.drinks[0].strIngredient7 !== null) {
      console.log(response.drinks[0].strMeasure7 + " " + response.drinks[0].strIngredient7)
    } else if (response.drinks[0].strMeasure7 && response.drinks[0].strIngredient7 === null) {} else if (response.drinks[0].strMeasure7 === null && response.drinks[0].strIngredient7) {
      console.log("Add " + response.drinks[0].strIngredient7 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure8 && response.drinks[0].strIngredient8 !== null) {
      console.log(response.drinks[0].strMeasure8 + " " + response.drinks[0].strIngredient8)
    } else if (response.drinks[0].strMeasure8 && response.drinks[0].strIngredient8 === null) {} else if (response.drinks[0].strMeasure8 === null && response.drinks[0].strIngredient8) {
      console.log("Add " + response.drinks[0].strIngredient8 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure9 && response.drinks[0].strIngredient9 !== null) {
      console.log(response.drinks[0].strMeasure9 + " " + response.drinks[0].strIngredient9)
    } else if (response.drinks[0].strMeasure9 && response.drinks[0].strIngredient9 === null) {} else if (response.drinks[0].strMeasure9 === null && response.drinks[0].strIngredient9) {
      console.log("Add " + response.drinks[0].strIngredient9 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure10 && response.drinks[0].strIngredient10 !== null) {
      console.log(response.drinks[0].strMeasure10 + " " + response.drinks[0].strIngredient10)
    } else if (response.drinks[0].strMeasure10 && response.drinks[0].strIngredient10 === null) {} else if (response.drinks[0].strMeasure10 === null && response.drinks[0].strIngredient10) {
      console.log("Add " + response.drinks[0].strIngredient10 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure11 && response.drinks[0].strIngredient11 !== null) {
      console.log(response.drinks[0].strMeasure11 + " " + response.drinks[0].strIngredient11)
    } else if (response.drinks[0].strMeasure11 && response.drinks[0].strIngredient11 === null) {} else if (response.drinks[0].strMeasure11 === null && response.drinks[0].strIngredient11) {
      console.log("Add " + response.drinks[0].strIngredient11 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure12 && response.drinks[0].strIngredient12 !== null) {
      console.log(response.drinks[0].strMeasure12 + " " + response.drinks[0].strIngredient12)
    } else if (response.drinks[0].strMeasure12 && response.drinks[0].strIngredient12 === null) {} else if (response.drinks[0].strMeasure12 === null && response.drinks[0].strIngredient12) {
      console.log("Add " + response.drinks[0].strIngredient12 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure13 && response.drinks[0].strIngredient13 !== null) {
      console.log(response.drinks[0].strMeasure13 + " " + response.drinks[0].strIngredient13)
    } else if (response.drinks[0].strMeasure13 && response.drinks[0].strIngredient13 === null) {} else if (response.drinks[0].strMeasure13 === null && response.drinks[0].strIngredient13) {
      console.log("Add " + response.drinks[0].strIngredient13 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure14 && response.drinks[0].strIngredient14 !== null) {
      console.log(response.drinks[0].strMeasure14 + " " + response.drinks[0].strIngredient14)
    } else if (response.drinks[0].strMeasure14 && response.drinks[0].strIngredient14 === null) {} else if (response.drinks[0].strMeasure14 === null && response.drinks[0].strIngredient14) {
      console.log("Add " + response.drinks[0].strIngredient14 + " to taste")
    } else {
      return
    }
    if (response.drinks[0].strMeasure15 && response.drinks[0].strIngredient15 !== null) {
      console.log(response.drinks[0].strMeasure15 + " " + response.drinks[0].strIngredient15)
    } else if (response.drinks[0].strMeasure15 && response.drinks[0].strIngredient15 === null) {} else if (response.drinks[0].strMeasure15 === null && response.drinks[0].strIngredient15) {
      console.log("Add " + response.drinks[0].strIngredient15 + " to taste")
    } else {
      return
    }
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
$("#start-quiz").on("click", function () {
  startGame();
  $("#start-quiz").attr("style", "display: none");
  $("#quiz").attr("style", "display: block");
  $(".shown").hide();
  //This limits the amount of charcters the user can input to match the size of the pokemon name
  $("#answer").attr("maxlength", pokeName.length);
});

$("#submit").on("click", function () {
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
  var timerInterval = setInterval(function () {
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