class Scoreboard {
    constructor() {
        this.scores = [];
    }

    getScoreboard () {
        return this.scores;
    }

    getScoreboardToChat () {
        var str = "🏅Le score de la session :";

        if (this.scores.length > 0) {
            this.scores.forEach((score) => {
                str += ` ${score.user} a ${score.points} points | `;
            });
        } else {
            str += " Pour le moment personne n'a marqué de points."
        }

        str += "🏅";
        return str;
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