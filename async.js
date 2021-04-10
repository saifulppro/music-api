// Search Song from input field.
const searchSongs = async () => {
    const searchText = document.getElementById('songName').value;
    // console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    // console.log(url);
    const res = await fetch(url)
    const data = await res.json()
    displaySongs(data.data);
}

// display song UI.
const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML ='';
    // run forEach loop.
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        // call html in template carret.
        songDiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="Lyrics('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `;
        songContainer.appendChild(songDiv);
    })
}

// get lyrics data.
const Lyrics = async (artist, title) =>{
    // console.log(artist, title)
    const url2 = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    // console.log(url2)
    const res = await fetch(url2)
    const data = await res.json()
    showLyrics(data.lyrics);
}
// display lyrics data in UI.
const showLyrics = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyrics;
}