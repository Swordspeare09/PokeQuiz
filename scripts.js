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
var randomPokeIndex = Math.floor((Math.random() * 151) + 1)
var tempPokemon = "https://pokeapi.co/api/v2/pokemon/" + randomPokeIndex;
var pokeName = "";

$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function(response) {
  console.log(response);

    pokeName = response.name
    $("#pic").attr("src", response.sprites.front_default);
    $("#name").text(pokeName);
});


//Event Listener for starting game
$("#start-quiz").on("click", function(){

  $("#start-quiz").attr("style", "display: none");
  $("#quiz").attr("style", "display: block");
  //This limits the amount of charcters the user can input to match the size of the pokemon name
  $("#answer").attr("maxlength", pokeName.length);
});

$("#submit").on("click", function(){

  var submittedAnswer = $("#answer").val();

  //This makes the input lowercase for easily checking the user answer
  submittedAnswer= submittedAnswer.toLowerCase();

  if(submittedAnswer === pokeName)
  {
    console.log("you win!");

  }
  else
  {
    M.toast({ html: "It wasn't very effective..." })
  }
  

})