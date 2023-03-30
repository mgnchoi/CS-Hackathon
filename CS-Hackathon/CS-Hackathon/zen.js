console.log(window.location.hostname);
document.addEventListener('DOMContentLoaded', () => {
    console.log(window.location.href)

    // grab button to listen for click
    const btn = document.getElementById('btn');
    const timer = new Timer();

    // set time property of timer after getting user input
    btn.addEventListener('click', () => {
        timer.time = Number(document.getElementById('time').value);

    })
    timer.setTime();
    //console.log(window.location.hostname);
    if (window.location.hostname === 'www.youtube.com') alert('this is youtube');

    // block social media sites while timer is on
    // if (timer.time > 0) {
    //     switch (window.location.hostname) {
    //         case 'www.youtube.com':
    //             document.body.innerText = 'NO YOUTUBE';
    //             alert("this is youtube")
    //             break;
    //         case 'www.facebook.com':
    //             document.body.innerText = 'NO FACEBOOK';
    //             break;
    //         case 'www.twitter.com':
    //             document.body.innerText = 'NO TWITTER';
    //             break;
    //         case 'www.instagram.com':
    //             document.body.innerText = 'NO INSTAGRAM';
    //             break;
    //         case 'www.tiktok.com':
    //             document.body.innerText = 'NO TIKTOK';
    //             break;
    //     }
    // }



});