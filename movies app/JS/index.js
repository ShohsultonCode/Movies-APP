movies.splice(50)



//Movies map start
const allMovies = movies.map((e) => {
    return {
        "title": e.title,
        "year": e.year,
        "categories": e.categories,
        "imdbId": e.imdbId,
        "imdbRating": e.imdbRating,
        "runtime": `${Math.trunc(e.runtime / 60)}h, ${e.runtime % 60}m`,
        "language": e.language,
        "youtubeId": `https://www.youtube.com/embed/${e.youtubeId}`,
        "summary": e.summary,
        "smallThumbnail": e.smallThumbnail,
        "bigThumbnail": e.bigThumbnail
    }
})

//Movies map end


//Movies render start
function createCards() {
    allMovies.forEach((e) => {
        const card = createElement('div', 'card', `
        <div class="card">
        <div class="imgdiv">
        <img src="${e.smallThumbnail}" alt="">
        </div>
        <div class="des">
        <div class="description">
            <h1 class="title">${e.title}</h1>
            <strong class="year">Year:<span>${e.year}</span></strong>
            <strong class="lang">Language:<span>${e.language}</span></strong>
            <strong class="rating">Rating:<span>${e.imdbRating}</span></strong>
            <strong>Category:<span>${e.categories}</span></strong>
            </div>
            <div class="move">
            <a href="${e.youtubeId}"><button class="youtube">YouTube</button></a>
            <a href="#"><button class="readmore">Read more..</button></a>
            <a href="#"><button class="save">Save</button></a>
            </div>
            </div>
            </div>
            
            `)
        $('.wrapper').appendChild(card)
   })
}

createCards()
//Movies render end


//Edit categories start
const categor = []
allMovies.forEach((item) => {
    item.categories.forEach((el) => {
        if (!categor.includes(el)) {
            categor.push(el)
        }
    })
})
categor.forEach((r) => {
    const option = createElement('option', '', r)


    $('select').appendChild(option)
})

//Edit categories end




//Search Filter start
function findFunction(regex) {
    return allMovies.filter(item => {
        return item.title.match(regex);
    })
}


$(".search-input").addEventListener("keyup", (e) => {
    const searchValue = e.target.value.trim();
    const regex = new RegExp(searchValue, "gi");

    const RenderFunction = findFunction(regex);
    setTimeout(() => {
        if (RenderFunction.length > 0) {
            RenderData(RenderFunction);
        } else {
            $(".wrapper").innerHTML = "Toming ketdimi bunaqa malumot kelmadi"
        }
    }, 1000);
});

//Search Filter end


function RenderData(data = []) {
    $(".wrapper").innerHTML = ""
    data.forEach((e) => {
        const card = createElement('div', 'card', `
        <div class="card">
        <div class="imgdiv">
        <img src="${e.smallThumbnail}" alt="">
        </div>
        <div class="des">
        <div class="description">
            <h1>${e.title}</h1>
            <strong>Year:<span>${e.year}</span></strong>
            <strong>Language:<span>${e.language}</span></strong>
            <strong>Rating:<span>${e.imdbRating}</span></strong>
            <strong>Category:<span>${e.categories}</span></strong>
            </div>
            <div class="move">
            <a href="${e.youtubeId}"><button class="youtube">YouTube</button></a>
            <a href="#"><button class="readmore">Read more..</button></a>
            <a href="#"><button class="save">Save</button></a>
            </div>
            </div>
            </div>
            
            `)
        $('.wrapper').appendChild(card)
    })
}




//Save films start
//I can not because It is very Difficult