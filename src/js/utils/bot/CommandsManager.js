class CommandsManager {
    getCommand(pCommand, pUsername) {
        switch (pCommand) {
            case 'score':
                return Scoreboard.getInstace().getScoreboardToChat();
                break;
        
            default:
                return `@${pUsername}, cette commande n'existe pas.`;
                break;
        }
    }
}