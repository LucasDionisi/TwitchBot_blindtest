const tmi = require('tmi.js');
const CommandsManager = require('./utils/bot/CommandsManager.js');
const cmdMgr = new CommandsManager();
const Songlist = require('./utils/music/Songlist.js');
const songlist = new Songlist();
// string-similarity https://npm.runkit.com/string-similarity -> seuil à 0.75 ???

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

let isTitleFound = false;
let isArtistFound = false;

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

    // if (message.toLowerCase() === music.title.toLocaleLowerCase()) {
    //     if (!isTitleFound) {
    //         client.say(channel, `Oui, tu as trouvé le titre ! C'était ${music.title} !`);
    //         isTitleFound = true;

    //         scoreboard.score(tags.username, 2);
    //     } else {
    //         client.say(channel, `Le titre a déjà été trouvé !`);
    //     }
    // }
	
    // if (message.toLowerCase() === music.artist.toLocaleLowerCase()) {
    //     if (!isArtistFound) {
    //         client.say(channel, `Oui, tu as trouvé l'artiste ! c'était ${music.artist} !`);
    //         isArtistFound = true;
    //     } else {
    //         client.say(channel, `L'artiste a déjà été trouvé !`);
    //     }
    // }
});