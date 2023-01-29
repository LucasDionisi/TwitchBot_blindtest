const SongStatus = require('../enums/SongStatus.js');

class Songlist {
    constructor () {
        this.songlist = [];
        this.currentSong = 0;
        this.isPlaying = false;
    }

    isGameStrated () {
        return this.isPlaying;    
    }

    stratGame () {
        this.isPlaying = true;
    }

    stopGame () {
        this.isPlaying = false;
    }

    addSong (pArtiste, pTitle, pPoints) {
        this.songlist.push({
            artist: pArtiste,
            isArtistFound: false,
            title: pTitle, 
            isTitleFound: false,
            points: pPoints,
            status: SongStatus.ToDo
        })
    }

    nextSong () {
        this.currentSong++;
    }

    getSonglist () {
        return this.songlist;
    }

    getCurrentSong () {
        return this.songlist[this.currentSong];
    }

    checkSong (pMessage) {
        
    }
}

module.exports = new Songlist();