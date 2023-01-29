const scoreboard = require('../music/Scoreboard.js');

class CommandsManager {
    getCommand(pCommand, pUsername) {
        switch (pCommand) {
            case 'score':
                return scoreboard.getScoreboardToChat();
                break;
        
            default:
                return `@${pUsername}, cette commande n'existe pas.`;
                break;
        }
    }
}

module.exports = new CommandsManager();