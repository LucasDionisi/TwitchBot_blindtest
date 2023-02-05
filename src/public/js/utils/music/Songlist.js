// Singleton, we want only one songlist
class Songlist {
    static instance = null;

    constructor() {
        this.songlist = [];
        this.threshold = 0.8; // To compare two strings (stringsimilarity)
        this.currentSong = -1;
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

    updateServerSongList() {
        $.ajax({
            type: "POST",
            url: "/api/songlist",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(this.songlist)
        });
    }

    removeSong(pIndex) {
        this.songlist.splice(pIndex, 1);

        this.updateServerSongList();
    }

    addSong(pArtiste, pTitle, pPenalty, pPoints) {
        this.songlist.push({
            isAlreadyPlayed: false,
            artist: pArtiste,
            isArtistFound: false,
            title: pTitle,
            isTitleFound: false,
            penalty: pPenalty,
            ispenaltyFound: false,
            points: pPoints,
            status: SongStatus.ToDo
        });

        this.updateServerSongList();
    }

    setSonglist(pSonglist) {
        this.songlist = pSonglist;
    }

    getSonglist() {
        return this.songlist;
    }

    setCurrentSong(pCurrentSongIndex) {
        this.currentSong = pCurrentSongIndex;
        this.songlist[this.currentSong].isAlreadyPlayed = true;
        this.updateServerSongList();
        this.songlist[this.currentSong].isArtistFound = false;
        this.songlist[this.currentSong].isTitleFound = false;
        this.songlist[this.currentSong].ispenaltyFound = false;
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
            isOk: false,
            isAlreadyFound: false
        }

        var song = this.songlist[this.currentSong];
        if (!this.isPlaying || song === undefined) return response;

        if (stringSimilarity.compareTwoStrings(pMessage.toLowerCase(), song.artist.toLowerCase()) > this.threshold) {
            if (song.isArtistFound) response.isAlreadyFound = true;
            song.isArtistFound = true;

            return this.buildCheckResponse(response, 'artist', song.artist, song.points);
        }

        if (stringSimilarity.compareTwoStrings(pMessage.toLowerCase(), song.title.toLowerCase()) > this.threshold) {
            if (song.isTitleFound) response.isAlreadyFound = true;
            song.isTitleFound = true;

            return this.buildCheckResponse(response, 'title', song.title, song.points);
        }

        if (stringSimilarity.compareTwoStrings(pMessage.toLowerCase(), song.penalty.toLowerCase()) > this.threshold) {
            if (song.ispenaltyFound) response.isAlreadyFound = true;
            song.ispenaltyFound = true;

            return this.buildCheckResponse(response, 'penalty', song.penalty, -song.points);
        }

        return response;
    }
}