var quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "Keep your friends close, but your enemies closer.", author: "Michael Corleone" },
    { quote: "I think, therefore I am.", author: "René Descartes" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
];


var indexesofusedQuotes = [];

function getRandomQuote() {
    if (indexesofusedQuotes.length === quotes.length) {
        alert("All quotes have been shown. Resetting...");
        indexesofusedQuotes = [];
    }

    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (indexesofusedQuotes.includes(randomIndex)); 
        //console.log(indexesofusedQuotes);
    var selectedQuote = quotes[randomIndex];

    // Display the quote and author
    document.getElementById("quoteDisplay").style.display = "block";
    document.getElementById("quoteText").textContent = `"${selectedQuote.quote}"`;
    document.getElementById("quoteAuthor").textContent = `- ${selectedQuote.author}`;

    indexesofusedQuotes.push(randomIndex);
}