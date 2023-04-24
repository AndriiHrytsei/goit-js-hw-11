export const gallery = document.querySelector(".gallery")
export const searchInput = document.querySelector(".search-input")
export const searchForm = document.querySelector(".search-form")

export async function fetchImages (api) {
    try{
        const images = await fetch(api)
        const response = await images.json()
        return response
    } catch (error) {
        return error
    }
}

export function renderImages(photos) {
    photos.forEach(photo => {
        gallery.insertAdjacentHTML("beforeend", 
        `<div class="photo-card">
            <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
            <div class="info">
                <div class="info-item">
                    <p>Likes</p>
                    <p>${photo.likes}</p>
                </div>
                <div class="info-item">
                    <p>Views</p>
                    <p>${photo.views}</p>
                </div>
                <div class="info-item">
                    <p>Comments</p>
                    <p>${photo.comments}</p>
                </div>
                <div class="info-item">
                    <p>Downloads</p>
                    <p>${photo.downloads}</p>
                </div>
            </div>
        </div>
        `)
    });
}