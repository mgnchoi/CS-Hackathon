class Timer {
    constructor() {
        this.time = 0;
        this.intervalHandle = 0;
        this.mySeconds = 0;

        this.setTime.bind(this);
    }

    setTime() {
        // convert ms to mins
        // this.time = this.time * 60000;
        // set timer

        // let container = document.getElementById('container');
        // container.style.display = 'none';
        this.mySeconds = this.time * 60;

        this.intervalHandle = setInterval(this.tick(), 1000)
        // setTimeout(() => {
        //     // change display to flex once timer runs out
        //     alert("timer");
        // }, this.time)

    }

    tick() {
        // let timeContainer = document.createElement('div');
        // let
        let timeDisplay = document.getElementById('countdown');
        let container = document.getElementById('container');
        container.appendChild(timeDisplay);

        console.log(this.mySeconds);
        let min = Math.floor(this.mySeconds / 60);
        let sec = this.mySeconds - (min * 60);
        console.log('min: ' + min + 'sec: ' + sec);
        console.log('inside tick');
        if (sec < 10) {
            sec = "0" + sec;
        }

        let message = min.toString() + ":" + sec;
        //let timeDisplay = document.createElement('div');
        console.log(message);
        timeDisplay.innerHTML = message;

        if (this.mySeconds === 0) {
            alert('Done');
            clearInterval(this.intervalHandle);
            //set user input to display
        }
        this.mySeconds--;

    }


}