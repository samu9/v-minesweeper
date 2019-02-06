import Vue from 'vue';
export default class LeaderboardService {
    maxRecords = 5;
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
                    if (this.leaderboard[data.type].length < this.maxRecords) {
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
    getWorst(level) {
        return this.leaderboard[level][this.leaderboard[level].length - 1][1];
    }
    checkRecord(time, level) {
        // if records less than 5 or better than the worst record, there is a new record
        return (this.leaderboard[level].length < this.maxRecords || time < this.getWorst(level));
    }
}