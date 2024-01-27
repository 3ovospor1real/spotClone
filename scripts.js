const searchInput = document.querySelector('#search-input');
const resultArtists = document.querySelector('#result-artists')
const resultPlaylist = document.querySelector('#results-playlist')

function request (searchTerm) {
    const url = `http://localhost/artists.json?name_like=${searchTerm}`;
    fetch(url)
    .then(response => response.json())
    .then(json => displayResults(json))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistsName = document.querySelector('#artist-name');
    const artistsImg = document.querySelector('#artist-img');

    result.forEach(e => {
        artistsName.innerText = e.name;
        artistsImg.src = e.urlImg;
    });

    resultArtists.classList.remove('hidden')
}

document.addEventListener('input', e => {
    const value = searchInput.value.toLowerCase()
    if(value === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return
    }

    request(value);
})
