document.addEventListener('DOMContentLoaded', () => {

// block social media sites while timer is on
switch (window.location.hostname) {
    case 'www.youtube.com':
        document.body.innerHTML = '<button>NO YOUTUBE</button>';
        break;
    case 'www.facebook.com':
        document.body.innerHTML = '<button>NO FACEBOOK</button>';
        break;
    case 'twitter.com':
        document.body.innerHTML = '<button>NO TWITTER</button>';
        break;
    case 'www.instagram.com':
        document.body.innerHTML = '<button>NO INSTAGRAM</button>';
        break;
    case 'www.tiktok.com':
        document.body.innerHTML = '<button>NO TIKTOK</button>';
        break;
}

// grab button to listen for click
const btn = document.getElementById('btn');
let time = null;
let mySeconds;
let intervalHandle;
let quoteText = '';
let quoteAuthor = '';

console.log(btn);
// set time property of timer after getting user input
btn.addEventListener('click', (e) => {
    e.preventDefault();

    time = Number(document.getElementById('time').value);
    mySeconds = time * 60;
    intervalHandle = setInterval(tick, 1000);
})



function tick() {

    let timeDisplay = document.getElementById('countdown');
    let container = document.getElementById('container');
    let timeInput = document.getElementById('time');
    let button = document.getElementById('btn');
    let smallPanda = document.getElementById('panda-1');
    let bigPanda = document.getElementById('panda-2');

    timeInput.style.display = "none";
    button.style.display = "none";
    smallPanda.style.display = 'none';
    bigPanda.style.display = 'flex';
    timeDisplay.style.fontSize = "50px";

    container.appendChild(timeDisplay);


    let min = Math.floor(mySeconds / 60);
    let sec = mySeconds - (min * 60);


    if (sec < 10) {
        sec = "0" + sec;
    }

    let message = min.toString() + ":" + sec;
    timeDisplay.innerHTML = message;

    if (mySeconds === 0) {
        quoteGenerator()
        alert(`${quoteText} - ${quoteAuthor}`);
        clearInterval(intervalHandle);
        timeDisplay.style.display = "none";
        timeInput.style.display = "flex";
        button.style.display = "flex";
        smallPanda.style.display = 'flex';
        bigPanda.style.display = 'none';


    }

    mySeconds--;

}



function quoteGenerator() {
    let response = fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        //.then(function (data) { console.log(data) })
        .then(function (data) {
            //let keys = Object.keys(data);
            let index = Math.floor((Math.random() * data.length));
            let quote = data[index];
            quoteText = quote.text;
            console.log(quote.text);
            quoteAuthor = quote.author;
            console.log(quote.author)
        })

}

console.log(quoteGenerator());

});