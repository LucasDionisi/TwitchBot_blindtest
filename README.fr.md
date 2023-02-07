# TwitchBot_blindtest

## 🤯 Comment ça fonctionne ?
À travers une interface web, vous allez pouvoir créer une liste de musique pour jouer à un blindtest avec vos spectateurs sur twitch.

![UI](/gitImg/UI.png)

En tant que Streamer, vous pouvez ajouter une nouvelle musique qui est composée de : 
- Artiste.
- Titre.
- Pénalité (permet aux spectateurs de ne pas spam tout et n'importe quoi).
- Points (qui seront attribués par chaque bonne réponse où pénalité).

L'œil en haut à gauche du tableau permet de cacher le contenu du tableau et ainsi de ne pas montrer les réponses aux spectateurs par erreur.

Une chanson peut être supprimée ou bien lancée. Une fois lancée (appuyer sur le bouton 'play'), le bot est à l'écoute des bonnes réponses dans le tchat.

Le tableau des points permet d'ajouter ou de supprimer des points à un utilisateur.

## 🙏 Me soutenir
Vous pouvez utiliser gratuitement ce bot. Si vous voulez me soutenir, vous pouvez faire une donation [ici](https://www.paypal.me/lucasdionisi) 🤩💙.

## ⚙ Installation
---
### 📝 Installation du bot
Dans le dossier ``src/public/config/`` vous devez dupliquer le fichier ``twitch_credentials_template.json`` en ``twitch_credentials.json``. Ouvrez le fichier et remplacez les données ci dessous avec le nom de votre bot, son jeton d'authentification et le nom de la chaine twitch ou le bot sera utilisé.

```json
{
    "botname": "botname",
    "oauthKey": "oauth:my_bot_token",
    "twitchChannels": [ "channels" ]
}
```

Installez la dernière version de [Node js](https://nodejs.org/). 

Lancez un terminal et tapez ```npm install``` pour installer toutes les dépendances et lancez le bot avec ```npm start```.

Votre bot est maintenant connecté à votre chaine twitch et vous pouvez le contrôler via [http://localhost:8080](http://localhost:8080).

### 🔏 Où trouver le token twitch ?
Dans un premier, temps vous devez créer un compte [Twitch](https://twitch.tv) à votre bot.

Récupérer votre [token Twitch](https://twitchapps.com/tmi/) et ne le partagez surtout pas ! Ce token permet d'avoir un contrôle total sur votre nouveau compte twitch.

Note: Vous pouvez utiliser votre propre compte Twitch, si vous voulez utiliser votre pseudo comme bot.

### 📚 Librairies
_Les librairies utilisées sont : [Tmi js](https://tmijs.com/), [String similarity](https://npm.runkit.com/string-similarity), [jQuery](https://jquery.com/) et [jQuery toast](https://github.com/kamranahmedse/jquery-toast-plugin)._

## 💡 Informations
Les messages du bot sont écrits en français. Dans une prochaine version, le choix de la langue sera possible.

Les prochaines mises a jour :
- Ajout de points à un utilisateur n'étant pas inscrit dans le tableau des scores.
- Information sur l'interface quand la musique a été trouvée.
- Ajout de widgets pour OBS.
- Possibilité de modifier le seuil de StringSimilarity.

## 💌 Remarks or Questions / Remarques ou Questions
Si vous avez une question ou une remarque, n'hésitez pas. Je reste disponnible ici pour bien par mail : lucas.dionisi@pro
