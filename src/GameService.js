import Vue from 'vue';
import { db, lbService } from "./main";

export default class GameService {
    mineProb = 0.15625; // based on minesweepronline.com values
    diffs = ['Easy', 'Normal', 'Hard'];
    bombs = 0;
    marked = 0;
    timer = 0;
    started = false;
    grid = [];
    EventBus = new Vue();

    constructor(height, width, bombs = 0, gameType = null) {
        this.initialize(height, width, bombs, gameType);
    }

    updateGrid() {
        this.EventBus.$emit('updatedGrid', this.grid);
    }
    restartedGame() {
        this.EventBus.$emit('restartedGame', this.game);
    }
    initialize(height, width, bombs = 0, gameType = null) {
        this.grid = [];
        this.started = false;
        this.loss = false;
        this.victory = false;
        this.marked = 0;
        this.defused = 0;
        this.timer = 0;
        this.height = height;
        this.width = width;
        this.gameType = gameType;

        //if not specified, bombs will be random based on mineProb
        this.bombs = bombs === 0 ? Math.floor(this.height * this.width * this.mineProb) : bombs;
        this.covered = (this.width * this.height) - this.bombs;

        //initializing grid
        for (let row = 0; row < this.height; row++) {
            this.grid[row] = [];
            for (let col = 0; col < this.width; col++) {
                this.grid[row][col] = {
                    bomb: false,
                    revealed: false,
                    flagged: false,
                    value: 0
                };
            }
        }

        //placing bombs
        for (let b = 0; b < this.bombs; b++) {
            let row = Math.floor(Math.random() * this.height);
            let col = Math.floor(Math.random() * this.width);
            while (this.grid[row][col].bomb) {
                row = Math.floor(Math.random() * this.height);
                col = Math.floor(Math.random() * this.width);
            };
            this.grid[row][col].bomb = true;

        }

        //setting cells values based on bombs
        for (let row in this.grid) {
            for (let col in this.grid[row]) {
                if (!this.grid[row][col].bomb) {
                    this.grid[row][col].value = this.checkNeighbors(
                        parseInt(row),
                        parseInt(col)
                    );
                }
            }
        }

        // firing the event
        this.updateGrid();

        clearInterval(this.interval);
    }
    getEdges(row, col) {
        return {
            row: {
                start: row > 0 ? row - 1 : row,
                end: row < this.height - 1 ? +row + 1 : row
            },
            col: {
                start: col > 0 ? col - 1 : col,
                end: col < this.width - 1 ? +col + 1 : col
            }
        };
    }
    checkNeighbors(row, col) {
        let count = 0;
        var edges = this.getEdges(row, col);

        for (let i = edges.row.start; i <= edges.row.end; i++) {
            for (let j = edges.col.start; j <= edges.col.end; j++) {
                if (this.grid[i][j].bomb) {
                    count++;
                }
            }
        }
        return count;
    }
    revealCell(row, col) {
        if (!this.started) {
            this.start();
        }
        if (this.loss || this.victory || this.grid[row][col].revealed || this.grid[row][col].flagged) {
            return;
        }
        if (this.grid[row][col].bomb) {
            this.gameOver();
            return;
        }
        this.grid[row][col].revealed = true;
        this.covered--;
        if (this.grid[row][col].value === 0) {
            this.revealNeighbors(row, col);
        }
        this.checkWin();
        this.updateGrid();
    }
    revealNeighbors(row, col) {
        var edges = this.getEdges(row, col);

        for (let i = edges.row.start; i <= edges.row.end; i++) {
            for (let j = edges.col.start; j <= edges.col.end; j++) {
                if (
                    this.grid[i][j].revealed ||
                    this.grid[i][j].flagged ||
                    this.grid[i][j].bomb
                ) {
                    continue;
                }
                this.grid[i][j].revealed = true;
                this.covered--;
                if (this.grid[i][j].value === 0) {
                    this.revealNeighbors(i, j);
                }
            }
        }
    }
    setFlag(row, col) {
        if (!this.started) {
            this.start();
        }
        if (this.grid[row][col].revealed || (this.bombs - this.marked == 0 && !this.grid[row][col].flagged)) {
            return;
        }
        if (!this.grid[row][col].flagged) {
            this.grid[row][col].flagged = true;
            this.marked++;
            if (this.grid[row][col].bomb) {
                this.defused++;
            }
        } else {
            this.grid[row][col].flagged = false;
            this.marked--;
            if (this.grid[row][col].bomb) {
                this.defused--;
            }
        }
        this.checkWin();
        this.updateGrid();
    }
    checkWin() {
        if (this.defused == this.bombs && this.covered == 0) {
            this.win();
        }
    }
    gameOver() {
        this.loss = true;
        this.stop();

        // revealing all non flagged bombs
        for (let row in this.grid) {
            for (let col in this.grid[row]) {
                if (this.grid[row][col].bomb && !this.grid[row][col].flagged) {
                    this.grid[row][col].revealed = true;
                    this.grid[row]
                }
            }
        }
        this.updateGrid();
    }
    win() {
        this.victory = true;
        this.stop();
        // if a new record is set, lanch an event
        if (lbService.checkRecord(this.timer, this.gameType) && this.gameType) {
            this.EventBus.$emit('newRecord', null);
        }
    }
    start() {
        this.started = true;
        this.interval = setInterval(() => {
            this.timer++;
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
    }
    save() {
        // can't save if there's a loss or a victory
        if (this.loss || this.victory) return false;

        // getting all the needed data into an object
        var saveObject = {
            height: this.height,
            width: this.width,
            timer: this.timer,
            grid: this.grid,
            marked: this.marked,
            defused: this.defused,
            bombs: this.bombs,
            covered: this.covered,
            gameType: this.gameType
        }

        // stringify the object and save it in localStorage as a string
        localStorage.setItem('game', JSON.stringify(saveObject));
        return true;
    }
    load() {
        if (localStorage.getItem("game") === null) return false;
        this.stop();
        var loadObject = JSON.parse(localStorage.getItem("game"));

        // resuming all the data
        this.height = loadObject.height;
        this.width = loadObject.width;
        this.timer = loadObject.timer;
        this.grid = loadObject.grid;
        this.marked = loadObject.marked;
        this.defused = loadObject.defused;
        this.bombs = loadObject.bombs;
        this.covered = loadObject.covered;
        this.gameType = loadObject.gameType;
        
        this.victory = false;
        this.loss = false;

        this.start();
        this.updateGrid();
        return true;

    }
}