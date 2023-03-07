const noticias = document.getElementById('noticias')
const noticia = document.getElementById('noticia').content
const fragment = document.createDocumentFragment()

let news = []

document.addEventListener('DOMContentLoaded', () => {
    cargaNoticias()
})

const cargaNoticias = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'db55eb484dmshbdabbfb6f536406p11b732jsn020d75150ad7',
            'X-RapidAPI-Host': 'spotify-web2.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify-web2.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100', options)
        .then(response => response.json())
        .then(response => {
            news = response
            dibujaNoticias()
            console.log(response)
        })
        .catch(err => console.error(err));
}

const dibujaNoticias = () => {
    news.forEach((item) => {
        noticia.querySelector('img').setAttribute('src', item.Image)
        noticia.querySelector('p').textContent = item.Title

        const clone = noticia.cloneNode(true)
        fragment.appendChild(clone)
    })
    noticias.appendChild(fragment)
}