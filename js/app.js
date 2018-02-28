const form = document.getElementById("search-form");
const searchField = document.getElementById("search-keyword");
const responseContainer = document.getElementById("response-container");
let searchedForText;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    responseContainer.innerHTML = "";
    searchedForText = searchField.value;
    getNews();
});

function getNews() {
    const articleRequest = new XMLHttpRequest();
    articleRequest.open("GET", `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=e98c9111b40848d9a1c05597baaf3024`);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
}

function handleError() {
    console.log("se ha producido un error");  
}

function addNews() {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    
    const article = data.response.docs;
    // console.log(article);
    const arrayFive = article.splice(0, 5);
    // console.log(arrayFive);
    
    
    article.forEach((element, index, array) => {
        
        const snippet = element.snippet;
        // console.log(snippet);
        // const multimedia1 = element.multimedia;
        // console.log(multimedia1);
        
        
        let li = document.createElement("li");
        li.className = "articleClass";
        li.innerText = snippet;

        responseContainer.appendChild(li);
        
    })
    // const title = article.headline.main;
    // console.log(title);
    
    // const snippet = article.snippet;
    // // console.log(snippet);
    
    
    // let li = document.createElement("li");
    // li.className = "articleClass";
    // li.innerText = snippet;

    // responseContainer.appendChild(li);
}