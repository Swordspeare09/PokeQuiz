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

function notSomething (){
  console.log("not doing anything")
}

$.ajax({
  url: tempPokemon,
  method: "GET"
}).then(function(response) {
  console.log(response);

    $("#pic").attr("src", response.sprites.front_default);
    $("#name").text(response.name);
});
