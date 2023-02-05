class CommandsManager {

    getCommand(pCommand, pUsername) {

        switch (pCommand) {

            case 'score':
            case 'classement':
                return Scoreboard.getInstance().getScoreboardToChat();
                break;

                // TODO
            case 'historique':
                return 'not yet implemented.';
                break;

            default:
                return `@${pUsername}, cette commande n'existe pas.`;
                break;
        }
    }
}