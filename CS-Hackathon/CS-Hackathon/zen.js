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

document.addEventListener('DOMContentLoaded', () => {
    // grab button to listen for click
    const btn = document.getElementById('btn');
    const timer = new Timer();

    // set time property of timer after getting user input
    btn.addEventListener('click', () => {
        timer.time = Number(document.getElementById('time').value);

    })
timer.setTime();

   
});