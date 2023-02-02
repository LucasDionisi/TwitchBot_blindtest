// // string-similarity https://npm.runkit.com/string-similarity -> seuil à 0.75 ???

class Client {
    static instance = null;

    constructor() {
        $.getJSON("config/twitch_credentials.json", (twitchCredentials) => {
            this.initTmiClient(twitchCredentials);

            this.songlist = Songlist.getInstance();
            this.cmdMgr = new CommandsManager();

            this.songlist.stratGame();
            this.songlist.addSong('Imagine Dragons', 'Sharks', 2);
            this.songlist.addSong('Imagine Dragons', 'Radioactive', 2);
            this.songlist.addSong('Imagine Dragons', 'Demons', 2);

            onClientStrarted(); // onClientStrarteds in script.js

            this.tmiClient.on('message', (channel, tags, message, self) => {
                this.onMessage(channel, tags, message, self)
            });
        });
    }

    static getInstance() {
        if (Client.instance === null) Client.instance = new Client();
        return Client.instance;
    }

    initTmiClient(twitchCredentials) {
        this.tmiClient = new tmi.Client({
            options: { debug: true }, // False in prod mode
            identity: {
                username: twitchCredentials.botname,
                password: twitchCredentials.oauthKey
            },
            channels: twitchCredentials.twitchChannels
        });

        this.channels = twitchCredentials.twitchChannels;

        this.tmiClient.connect();
    }

    onMessage(channel, tags, message, self) {
        // Ignore echoed messages.
        if (self) return;

        if (message.startsWith('!')) {
            const args = message.slice(1).split(' ');
            const command = args.shift().toLowerCase();

            this.tmiClient.say(channel, this.cmdMgr.getCommand(command, tags.username));
            return;
        }

        if (this.songlist.isGameStrated()) {
            var response = this.songlist.checkSong(message);

            if (response.isOk && !response.isAlreadyFound) {
                this.tmiClient.say(channel, `Bravo @${tags.username}, tu as trouvé ${response.found === 'artist' ? "l'artiste" : "le titre"} qui était ${response.solution} !`);
                Scoreboard.getInstance().score(tags.username, response.points);
            }
        }
    }

    sendMessage(pMessage) {
        this.channels.forEach(channel => this.tmiClient.say(channel, pMessage));
    }
}

Client.getInstance();