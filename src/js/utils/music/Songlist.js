// Singleton, we want only one songlist
class Songlist {
    static instance = null;

    constructor() {
        this.songlist = [];
        this.currentSong = 0;
        this.isPlaying = false;
    }

    static getInstance() {
        if (Songlist.instance === null) Songlist.instance = new Songlist();
        return Songlist.instance;
    }

    isGameStrated() {
        return this.isPlaying;
    }

    stratGame() {
        this.isPlaying = true;
    }

    stopGame() {
        this.isPlaying = false;
    }

    removeSong(pIndex) {
        this.songlist.splice(pIndex, 1);
    }

    addSong(pArtiste, pTitle, pPoints) {
        this.songlist.push({
            artist: pArtiste,
            isArtistFound: false,
            title: pTitle,
            isTitleFound: false,
            points: pPoints,
            status: SongStatus.ToDo
        })
    }

    nextSong() {
        this.currentSong++;
    }

    getSonglist() {
        return this.songlist;
    }

    getCurrentSong() {
        return this.songlist[this.currentSong];
    }

    buildCheckResponse(pResponse, pFound, pSolution, pPoints) {
        pResponse.isOk = true;
        pResponse.found = pFound;
        pResponse.solution = pSolution;
        pResponse.points = pPoints;
        return pResponse;
    }

    checkSong(pMessage) {
        var response = {
            isOk: false
        }

        var song = this.songlist[this.currentSong];

        if (!this.isPlaying || song === undefined) return response;

        if (pMessage.toLowerCase() === song.artist.toLowerCase()) {
            if (song.isArtistFound) response.isAlreadyFound = true;
            song.isArtistFound = true;

            return this.buildCheckResponse(response, 'artist', song.artist, song.points);
        }

        if (pMessage.toLowerCase() === song.title.toLowerCase()) {
            if (song.isTitleFound) response.isAlreadyFound = true;
            song.isTitleFound = true;

            return this.buildCheckResponse(response, 'title', song.title, song.points);
        }

        return response;
    }
}