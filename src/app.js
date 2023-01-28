const tmi = require('tmi.js');

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

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`);
	}
});