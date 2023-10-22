const acceskey="WtHSy1NmQ78cbUaKOO0s_G2pRL9bqeEfKvSQAa4xkBI"

const forme1=document.querySelector("form")
const inpute1=document.querySelector("input")
const searchresults=document.querySelector(".search-results")
const showmore=document.querySelector(".show-more-button")

let inputdata=""
let page=1;

async function searchImages(){
    inputdata=inpute1.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${acceskey}`;

    const response=await fetch(url);  
    const data=await response.json();
    const results=data.results;

    if(page===1){
        searchresults.innerHTML="";
    } 
    results.map((image)=>{
        const imagewrapper=document.createElement("div");
        imagewrapper.classList.add("search-result");
        const imageElement=document.createElement("img");
        imageElement.src=image.urls.small;
        const imagelink=document.createElement("a");
        imagelink.href=image.links.html;
        imagelink.target="_blank";  
        imagelink.textContent=image.alt_description;
    
        const description = document.createElement("div");
        description.classList.add("image-description");
        description.textContent = image.alt_description;
    
        imagewrapper.appendChild(imageElement);
        imagewrapper.appendChild(description);
        searchresults.appendChild(imagewrapper);
    });
page++
if(page>1){
    showmore.style.display="block" ;

}
}

forme1.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();


});

showmore.addEventListener("click",()=>{
    searchImages();


});
