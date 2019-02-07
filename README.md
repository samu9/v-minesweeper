# v-minesweeper
* Minesweeper built in [Vue.js](https://vuejs.org/)
* User Interface built with [Nes.css](https://www.npmjs.com/package/nes.css)
* Leaderboard scores stored on [Google Firebase](https://firebase.google.com/)

## How to run
1. Download or clone master
2. Run `npm install` to install all dependancies
3. Run `npm run build` to build the code
4. In _dist/_ folder, launch _index.html_ (it must be launched on a HTTP server)

## Live version
A live version of the last build is available [here](https://samu9.github.io/v-minesweeper).

## Save and Load
 :exclamation:**Save** and **Load** functions rely on browser's _localStorage_.
 Make sure that this feature works properly on your browser to user these functions.

 ## Leaderboard
 Leaderboard keeps track of the best 5 scores for each difficulty.
 Custom grid sizes scores won't be saved.
 A 4 characters nickname must be inserted, and the leaderboard will update automatically.