const e=document.querySelector(".gallery"),n=document.querySelector(".search-input");document.querySelector(".search-form").addEventListener("submit",(t=>{t.preventDefault(),async function(e){try{const n=await fetch(e);return await n.json()}catch(e){return e}}(`https://pixabay.com/api/?key=35594812-0318ae570b601c4a3427f19fb&q=${n.value.toLowerCase()}&image_type=photo&orientation=horizontal&safesearch=true`).then((n=>{e.replaceChildren(""),n.hits.forEach((n=>{e.insertAdjacentHTML("afterbegin",`<div class="photo-card">\n            <img src="${n.webformatURL}" alt="${n.tags}" loading="lazy" />\n            <div class="info">\n                <p class="info-item">\n                    <b>Likes ${n.likes}</b>\n                </p>\n                <p class="info-item">\n                    <b>Views ${n.views}</b>\n                </p>\n                <p class="info-item">\n                    <b>Comments ${n.comments}</b>\n                </p>\n                <p class="info-item">\n                    <b>Downloads ${n.downloads}</b>\n                </p>\n            </div>\n        </div>\n        `)}))}))}));
//# sourceMappingURL=index.fb6494df.js.map
