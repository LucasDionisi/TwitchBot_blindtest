// Singleton, we want only one scoreboard
class Scoreboard {
    static instance = null;

    constructor() {
        // TODO, just json instead of jsonArray
        this.scores = [];
    }

    static getInstance() {
        if (Scoreboard.instance === null) Scoreboard.instance = new Scoreboard();
        return Scoreboard.instance;
    }

    setScoreboard(pSocres) {
        this.scores = pSocres;
    }

    getScores() {
        return this.scores;
    }

    getScoreboardToChat() {
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

    score(pUser, pPoints) {
        var indexOfUser = -1;
        for (var i = 0; i < this.scores.length; i++) {
            if (this.scores[i].user.toLocaleLowerCase() === pUser.toLocaleLowerCase()) {
                indexOfUser = i;
                break;
            }
        }

        if (indexOfUser >= 0) { // user exists
            this.scores[indexOfUser].points += parseInt(pPoints);
        } else {
            this.scores.push({
                user: pUser,
                points: parseInt(pPoints)
            });
        }

        cookieManager.addCookie('score', JSON.stringify(this.scores));
    }
}