const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const image = document.getElementById("image123");
const feedBack = document.getElementById("feedback");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=grT6gXrLGzNlM3WbLkH6zsvhYiK3T9Pj&s=${searchTerm}`)
    .then((resolve) => {
        return resolve.json()
    })
    .then((res) => {
        feedBack.textContent = "";
        image.src = res.data.images.original.url;
        searchInput.value = "";
       
    })
    .catch((error) => {
        //console.error(error);
        feedBack.textContent = error.message;
    })
});











