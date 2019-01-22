import Vue from 'vue';

export default class GameService {
    bombs = 0;
    marked = 0;
    timer = 0;
    mineProb = 0.1;
    started = false;
    grid = [];
    EventBus = new Vue();

    constructor(height, width) {
        this.initialize(height, width);
    }
    updateGrid(){
        this.EventBus.$emit('updatedGrid', this.grid);
    }
    restartedGame(){
        this.EventBus.$emit('restartedGame', this.game);
    }
    initialize(height, width) {
        clearInterval(this.interval);
        this.grid = [];
        this.started = false;
        this.marked = 0;
        this.defused = 0;
        this.timer = 0;
        this.bombs = 0;
        this.height = height;
        this.width = width;
        for (let row = 0; row < this.height; row++) {
            this.grid[row] = [];
            for (let col = 0; col < this.width; col++) {
                this.grid[row][col] = {
                    bomb: Math.random() < this.mineProb,
                    revealed: false,
                    flagged: false,
                    value: 0
                };
                if (this.grid[row][col].bomb) {
                    this.bombs++;
                }
            }
        }

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
        this.covered = (this.width * this.height) - this.bombs;
        this.updateGrid();
        console.log(this.bombs);
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
            this.startGame();
        }
        if (this.grid[row][col].revealed || this.grid[row][col].flagged) {
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
        this.EventBus.$emit('updatedGrid', this.grid);
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
        if (this.grid[row][col].revealed) {
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
        console.log("Defused", this.defused, "Covered", this.covered);
        if (this.defused == this.bombs && this.covered == 0) {
            this.win();

        }
    }
    gameOver() {
        console.log("Game Over");
        this.stopGame();
    }
    win() {
        console.log("WIN");
        this.stopGame();
    }
    startGame() {
        this.started = true;
        this.timer = 1;
        this.interval = setInterval(() => {
            this.timer++;
        }, 1000);
    }
    stopGame() {
        clearInterval(this.interval);
    }
}