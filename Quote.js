const anime = document.getElementById("anime"),
    quoteCharacter = document.getElementById("character"),
    quoteInformation = document.getElementById("quote"),
    randomQuote = document.getElementById("btn");


function genarateQuote() {
    fetch("https://animechan.vercel.app/api/random")
    .then(Response => Response.json ())
    .then(data => {
        anime.textContent = data.anime,
        quoteCharacter.textContent = `By___${data.character}`
        quoteInformation.textContent = data.quote
    })

}


genarateQuote()

randomQuote.addEventListener("click", () =>{
    genarateQuote()
})