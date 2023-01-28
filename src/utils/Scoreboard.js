class Scoreboard {
    constructor() {
        this.scores = [];
    }

    getScoreboard () {
        return this.scores;
    }

    score (pUser, pPoints) {
        var indexOfUser = -1;
        for (var i = 0; i < this.scores.length; i++) {
            if (this.scores[i].user === pUser) {
                indexOfUser = i;
                break;
            }
        }
        
        if (indexOfUser >= 0) { // user exists
            this.scores[indexOfUser].points += pPoints;
        } else {
            this.scores.push({
                user: pUser,
                points: pPoints
            });
        }
    }
}

module.exports = Scoreboard;