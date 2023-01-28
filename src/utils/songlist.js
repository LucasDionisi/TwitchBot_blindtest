class Songlist {
    constructor () {
        this.songlist = [];
    }

    addSong (pArtiste, pTitle, pPoints) {
        this.songlist.push({
            artist: pArtiste,
            title: pTitle, 
            points: pPoints
        })
    }

    getSonglist () {
        return this.songlist;
    }
}

module.exports = Songlist;