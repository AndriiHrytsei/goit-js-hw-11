import * as mainJS from "./js/main.js"

mainJS.searchForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    mainJS.fetchImages(`https://pixabay.com/api/?key=35594812-0318ae570b601c4a3427f19fb&q=${mainJS.searchInput.value.toLowerCase()}&image_type=photo&orientation=horizontal&safesearch=true&per_page=100`)
    .then(images => {
        mainJS.gallery.replaceChildren([])
        mainJS.renderImages(images["hits"])
    })
})
