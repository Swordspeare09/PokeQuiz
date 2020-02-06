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

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });
//---------------_______________---------------Variables---------------_______________---------------
var secondsRemaining = 15;
var randomPokeIndex = Math.floor((Math.random() * 151) + 1)
var tempPokemon = "https://pokeapi.co/api/v2/pokemon/" + randomPokeIndex;
var pokeName = "";
var pokeImage = document.getElementById("pic");
var statusToggle = document.querySelector("#statusToggle");
var toggleSpan = document.querySelector("#status");


$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function (response) {
  console.log(response);

    pokeName = response.name
    $("#pic").attr("src", response.sprites.front_default);
    //Currently only shakes the image on time.
    $("#name").text(pokeName);
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
    //Removes the shake animation when the input is correct
    pokeImage.classList.remove("apply-shake");

  } 
  else
  {
    M.toast({ html: "It wasn't very effective..." });
    //Makes the image shake after the first incorrect guess
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
          //removes the shake animation when the timer reaches 0
        pokeImage.classList.remove("apply-shake")

      }
  }, 1000);
} //---------------End of startGame function--------------

statusToggle.addEventListener("change", toggleStatus);