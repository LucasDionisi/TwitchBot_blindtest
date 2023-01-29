const tmi = require('tmi.js');
// string-similarity https://npm.runkit.com/string-similarity -> seuil à 0.75 ???
const cmdMgr = require('./utils/bot/CommandsManager.js');
const songlist = require('./utils/music/Songlist.js');
const scoreboard = require('./utils/music/Scoreboard.js');

// Retrieve data to connect bot
const twitchCredentials = require('./config/twitch_credentials.json');

const client = new tmi.Client({
	options: { debug: true }, // False in prod mode
	identity: {
		username: twitchCredentials.botname,
		password: twitchCredentials.oauthKey
	},
	channels: twitchCredentials.twitchChannels
});

client.connect();

songlist.stratGame();
songlist.addSong('Imagine Dragons', 'Sharks', 2);
songlist.addSong('Imagine Dragons', 'Radioactive', 2);
songlist.addSong('Imagine Dragons', 'Demons', 2);

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if (self) return;

    if (message.startsWith('!')) {
        const args = message.slice(1).split(' ');
	    const command = args.shift().toLowerCase();

        client.say(channel, cmdMgr.getCommand(command, tags.username));
        return;
    }

    if (songlist.isGameStrated()) {
        var response = songlist.checkSong(message);

        if (response.isOk && !response.isAlreadyFound) {
            client.say(channel, `Bravo @${tags.username}, tu as trouvé ${response.found === 'artist' ? "l'artiste"  : "le titre"} qui était ${response.solution} !`);
            scoreboard.score(tags.username, response.points);
        }  
    }
});