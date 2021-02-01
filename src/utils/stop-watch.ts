export default class StopWatch {
  private startTime
  constructor() {
    this.startTime = Date.now()
  }

  elapseTime() {
    const currentTime = Date.now()
    console.log(`当前程序运行时间 ${(currentTime - this.startTime) / 1000}s`)
  }
}
