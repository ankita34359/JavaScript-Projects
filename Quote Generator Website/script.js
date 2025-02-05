const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://quotes-api-self.vercel.app/quote";
    
async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}

getQuote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

function linkedin() {
    window.open("https://www.linkedin.com/feed/?shareActive=true&text=" + quote.innerHTML + "----by " + author.innerHTML, "linkedin Window", "width=600, height=300" );
}
