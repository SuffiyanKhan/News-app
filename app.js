let mainNews = document.getElementById("mainNews");
let searches = document.getElementById("searches");
let dated = new Date();
// let stringDated = dated.toDateString();
let date = dated.getDate();
let month = dated.getMonth();
let year = dated.getFullYear()
let formula = year +"-"+ month+"-"+date
// console.log(formula)
function getNews(){
    mainNews.innerHTML = ' ';
    fetch(`https://newsapi.org/v2/everything?q=${searches.value}&from=${formula}&sortBy=publishedAt&apiKey=cc9057822bbe4895ba22f9d7e4ed05e8`)
.then(Response => Response.json())
.then( data => {
    // console.log(data.articles[0])
    let datad = data.articles
    for(let i=0; i < datad.length; i++){
        mainNews.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
          <img src="${datad[i].urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datad[i].title}</h5>
            <p class="card-text">${datad[i].description}</p>
            <a  href="${datad[i].url}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        `
    
    }
})
.catch( err => console.log(err))
}




fetch(`https://newsapi.org/v2/everything?q=pakistan&from=${formula}&sortBy=publishedAt&apiKey=cc9057822bbe4895ba22f9d7e4ed05e8`)
.then(Response => Response.json())
.then( data => {
    // console.log(data.articles[0])
    let datad = data.articles
    for(let i=0; i < datad.length; i++){
        mainNews.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
          <img src="${datad[i].urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${datad[i].title}</h5>
            <p class="card-text">${datad[i].description}</p>
            <a  href="${datad[i].url}" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        `
    
    }
})
.catch( err => console.log(err))