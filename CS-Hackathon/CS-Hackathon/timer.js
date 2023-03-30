class Timer {
    constructor() {
        this.time = 0;

        this.setTime.bind(this);
    }

    setTime() {
        // convert ms to mins
        // this.time = this.time * 60000;
        // set timer
        setTimeout(() => {
            // change display to flex once timer runs out
            alert("timer");
        }, this.time)
    }
}