class Chronometer {
  constructor() {
     this.currentTime = 0;
     this.intervalId = null

  }

  start(printTimeCallback) {
   let start = setInterval(() => {
       this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
        let minutes = 0
        if(!this.currentTime){
          return 0
        } else if(this.currentTime > 59){
          this.currentTime = 0;
          minutes++;
        }
        return minutes
      }

  getSeconds() {
    if(!this.currentTime){
      return 0
    } else if(this.currentTime){
      return this.currentTime++;
    } else if(this.currentTime > 60){
      return this.currentTime = 0;
    }
    return this.currentTime
  }

  computeTwoDigitNumber(value) {
    if(!typeof value === "String" ){
     return String(value).slice(0,2)
    }
  }

  stop() {
    clearInterval(start)
  }

  reset() {
    setInterval(() => {
      return this.currentTime === 0;
    })
  }

  split() {
    // ... your code goes here
  }
}
