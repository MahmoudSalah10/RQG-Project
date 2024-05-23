var quotes = [{
    quote: "“Be yourself; everyone else is already taken.”",
    writer: "― Oscar Wilde"

},{
    quote: "“A room without books is like a body without a soul.”",
    writer: "― Marcus Tullius Cicero"
},{
    quote: "” Prove them wrong ”",
    writer: "― Bernard M. Baruch"
},{
    quote: "“You only live once, but if you do it right, once is enough.”",
    writer: "― Mae West"
},{
    quote: "“Be the change that you wish to see in the world.”",
    writer: "― Mahatma Gandhi"
},{
    quote: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    writer: "― Oscar Wilde"
},
{
    quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    writer: "― Bernard M. Baruch"
},
{
    quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    writer: "― Dr. Seuss"
},
{
    quote: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
    writer: "― Martin Luther King Jr"
},
{
    quote: "“A friend is someone who knows all about you and still loves you.”",
    writer: "― Elbert Hubbard"
},
];
var quotebtn = document.getElementById('quote-btn');
var quote = document.querySelector('.quote');
var writer = document.querySelector(".writer")
quotebtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
});
