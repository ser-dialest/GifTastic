# GifTastic

## Purpose
This website links to GIPHY's API to pull animated GIFs found by keyword.
As can be seen at the top of the page, this is a site intended to deliver images of Pokemon.

##Installation
The app can be accessed on-line at https://ser-dialest.github.io/GifTastic/
To run locally, clone the GitHub repository and open index.html in the browser of your choice.

## Operation
There are a string of buttons that each have the names of Pokemon on them.
When one of these buttons is clicked, it will request the first 10 GIFs that GIPHY associates with the word on the button.
It will then provide some information about the Pokemon you have clicked: 

* It's ID Number according to the National PokeDex (the list of all Pokemon Nintendo has released in order of their release).
* The name of the Pokemon
* The elemental type (or types) of the Pokemon

At the bottom, a button will appear that will allow you to summon up to 10 more GIFs (if they exist on GIPHY)

There is also an input field that allows the user to input Pokemon he or she wants to see.
As mentioned before, this is a site for viewing Pokemon, so it will first check to see if what has been entered is, in fact, a Pokemon.
(Of course, I can't control what GIFs GIPHY thinks has to do with the keyword!)
If it is, a new button will be created in the color of the primary type of that Pokemon, which will have all the functionality of the pre-existing buttons.

## Copyrights
While the app is written solely by me, Jeffrey Lloyd Heatherly, Pokemon, the Pokemon logo, and all associated characters are the property of Nintendo, GameFreak, Creatures, and The Pokemon Company.
Colors and formatting inspired by the Pokemon Ruby Summary Screen.
