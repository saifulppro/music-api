// Search Song from input field.
const searchSongs = () => {
    const searchText = document.getElementById('songName').value;
    // console.log(searchText);
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySongs(data.data))
}

// display song UI.
const displaySongs = songs => {
    console.log(songs)
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
const Lyrics = (artist, title) =>{
    // console.log(artist, title)
    const url2 = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    // console.log(url2)
    fetch(url2)
    .then(res => res.json())
    .then(data => showLyrics(data.lyrics))
}
// display lyrics data in UI.
const showLyrics = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyrics;
}