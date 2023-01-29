const Scoreboard = require('../music/Scoreboard.js');
const scoreboard = new Scoreboard();

class CommandsManager {
    getCommand(command, username) {
        switch (command) {
            case 'score':
                return scoreboard.getScoreboardToChat();
                break;
        
            default:
                return 'coucou'
                break;
        }
    }
}

module.exports = CommandsManager;