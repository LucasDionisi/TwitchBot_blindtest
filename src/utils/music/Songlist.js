const SongStatus = require('../enums/SongStatus.js');

class Songlist {
    constructor () {
        this.songlist = [];
        this.currentSong = 0;
    }

    addSong (pArtiste, pTitle, pPoints) {
        this.songlist.push({
            artist: pArtiste,
            title: pTitle, 
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
}

module.exports = Songlist;