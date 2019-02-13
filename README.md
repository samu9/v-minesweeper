# v-minesweeper
* Minesweeper built in [Vue.js](https://vuejs.org/)
* User Interface built with [Nes.css](https://www.npmjs.com/package/nes.css)
* Leaderboard scores stored on [Google Firebase](https://firebase.google.com/)

## How to run
1. Download or clone master and move to the folder
2. Run the command `npm install` to install all dependancies
3. Run the command `npm run build` to build the code
4. In _dist/_ folder, launch _index.html_ (it must be launched on a HTTP server with root in _dist/_)

Alternatively, run `npm run dev` and open a browser page to _localhost:8080_

## Live version
A live version of the last build is available [here](https://samu9.github.io/v-minesweeper).

## Select difficulty
* Easy (8 x 8 grid, 10 bombs)
* Normal (16 x 16 grid, 40 bombs)
* Hard (16 x 30 grid, 99 bombs)

### Custom 
Grid values range: from 3 to a max of 30 to avoid to break the layout and keep an enjoiable experience on smaller screens.

If bombs are left to 0, the number will be determined randomly based the grid size and a fixed percentage value.

## Save and Load
 :exclamation:**Save** and **Load** functions rely on browser's _localStorage_.
 Make sure that this feature works properly on your browser to use these functions.

 ## Leaderboard
 Leaderboard keeps track of the best 5 scores for each difficulty.
 
 Custom grid sizes scores won't be saved.
 
 When you set a new highscore a 4 characters nickname must be inserted, and the leaderboard will update automatically (it might take some time depending on internet connection and response times from the server).
 
 :exclamation: Poor Internet connection could lead to connection errors from Google Firebase.
 
 
