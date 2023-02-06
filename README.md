# TwitchBot_blindtest

🥖 La version française : [ici](README.fr.md) 🥖

## 🤯 How does it work?
---
Through a web interface, you will be able to create a music list to play a musical blindtest with your viewers on twitch.

![UI](/gitImg/UI.png)

As a Streamer, you can add new music that composed of : 
- Artist.
- Title.
- Penalty (allows viewers not to spam anything and everything).
- Points (which will be awarded for each correct answer or penalty).

The eye at the top left of the board allows you to hide the content of the board and thus not show the answers to the audience by mistake.

A song can be deleted or started. Once started (press the 'play' button), the bot listens for the correct answers in the chat.

The scoreboard allows you to add or remove points to a user.

## 🙏 Support me
---
You can use this bot for free. If you want to support me, you can donate [here](https://www.paypal.me/lucasdionisi) 🤩💙.

## ⚙ Installation
---
### 📝 Bot setup
In folder ``src/public/config/`` duplicate the file ``twitch_credentials_template.json`` in ``twitch_credentials.json``. Open file and replace data bellow with your bot name, the token and the twitch channel where the robot will be used.

```json
{
    "botname": "botname",
    "oauthKey": "oauth:my_bot_token",
    "twitchChannels": [ "channels" ]
}
```

Install the last version of [Node js](https://nodejs.org/). 

Run ```npm install``` to install all dependencies and start the bot with ```npm start```.

Your bot is now connected to your twitch channel and you can control through [http://localhost:8080](http://localhost:8080).

### 🔏 Where find the twitch token?
First, you have to create a [Twitch](https://www.twitch.tv/) account for your bot.

Retrieve your [Twitch token](https://twitchapps.com/tmi/) and don't share it! This token permit to have a full control on your new twitch account.

Note: You can use your own Twitch account, if you want to have your pseudo for you bot.

### 📚 Libs
_The librairies used are: [Tmi js](https://tmijs.com/), [String similarity](https://npm.runkit.com/string-similarity), [jQuery](https://jquery.com/) and [jQuery toast](https://github.com/kamranahmedse/jquery-toast-plugin)._

## 💡 Informations
---
Bot messages are written in french. In a future version, the choice of the language will be possible.

The next updates :
- Adding points to a user not listed in the scoreboard.
- Information on the interface when music has been found.
- Add widgets for OBS.
- Possibility to change the StringSimilarity threshold.

## 💌 Remarks or Questions
---
If you have a question or a remark, do not hesitate. I remain available here for well by mail : lucas.dionisi@pro