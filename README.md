# PokeQuiz

Welcome to PokeQuiz, where diehard fans and casual users alike can be tested on their knowledge of the well-known Japanese pocket monsters. This application makes api calls to two different api databases: the PokeAPI and CocktailDB . This application also has two different settings to play through: Kid Friendly mode and non-Kid Friendly mode.

Upon loading to the main landing page, the user will be greeted with a red and black page with the name of the application. Directly underneath the name of the application, there is a toggle button that will determine whether kid friendly mode is activated or not. This will determine what the options of the game will be after the game is over. When the user is ready to begin, all they need to do is click the "Start!" button.

# Instructions:

At the start of game, the application calls the POKeAPI and gets back information on a random pokemon. The pokemon image and a 15 second timer is displayed along with an input field with an attached submit button. The user has 15 seconds to guess the correct name of the shown monster. On an incorrect guess, the image will shake, and the user will get feedback on the screen that the guess was incorrect. If the user gets the name correct before the timer runs out, the image is replaced with a generic image of a pokeball and the correct name of the monster is displayed. If the timer runs down to zero and the user has not guessed correctly, the correct name of the monster will appear under the image. If the user has opted to play with Kid Friendly mode activated, the user will be presented with a main menu button to return to the main menu. 

If the user has chosen to turn kid friendly mode off, the user’s options will be different after the game is over. In addition to a main menu button, the user will be presented with an option called "drink'. When this button is pressed, the application will make a call to the CocktaiDB api and will display an image of a random drink along with the name of the drink. The user will also be presented with a list of the ingredients to make the presented drink, as well as the correct measurements of the required ingredients. If the user wishes to try another random drink, all they need to do is click the “drink” button to display a different random drink. 

Try PokeQuiz today!

https://swordspeare09.github.io/Project1
