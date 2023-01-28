const tmi = require('tmi.js');
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

const music = {
    title: 'Sharks',
    artist: 'Imagine Dragons'
};

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    if (message.toLowerCase() === music.title.toLocaleLowerCase()) {
        if (!isTitleFound) {
            client.say(channel, `Oui, tu as trouvé le titre ! C'était ${music.title} !`);
            isTitleFound = true;
        } else {
            client.say(channel, `Le titre a déjà été trouvé !`);
        }
    }
	
    if (message.toLowerCase() === music.artist.toLocaleLowerCase()) {
        if (!isArtistFound) {
            client.say(channel, `Oui, tu as trouvé l'artiste ! c'était ${music.artist} !`);
            isArtistFound = true;
        } else {
            client.say(channel, `L'artiste a déjà été trouvé !`);
        }
    }
});