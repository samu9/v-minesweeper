import Vue from 'vue';
export default class LeaderboardService {
    leaderboard = {};
    EventBus = new Vue();

    constructor(db) {
        this.db = db;
        this.update();
    }

    update() {
        this.leaderboard = {
            Easy: [],
            Normal: [],
            Hard: []
        };
        // getting the data
        this.db
            .orderBy("time")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    let data = doc.data();
                    // only show the best 5 records for each level
                    if (this.leaderboard[data.type].length < 5) {
                        this.leaderboard[data.type].push([data.user, data.time]);
                    }
                });
            });
        this.EventBus.$emit('updatedLeaderboard', null);
    };
    addRecord(user, time, type) {
        this.db.add({
            time: time,
            user: user,
            type: type
        })
        this.update();
    }
    checkRecord(time, level) {
        if (this.leaderboard[level].length < 5 || time < this.leaderboard[level][this.leaderboard[level].length - 1][1]) return true;
        return false;
    }
    getWorst(level) {
        return this.leaderboard[level][this.leaderboard[level].length - 1][1];
    }
}