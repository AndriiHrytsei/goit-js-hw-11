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
        gallery.insertAdjacentHTML("afterbegin", 
        `<div class="photo-card">
            <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes ${photo.likes}</b>
                </p>
                <p class="info-item">
                    <b>Views ${photo.views}</b>
                </p>
                <p class="info-item">
                    <b>Comments ${photo.comments}</b>
                </p>
                <p class="info-item">
                    <b>Downloads ${photo.downloads}</b>
                </p>
            </div>
        </div>
        `)
    });
}