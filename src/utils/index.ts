import StdIn from './std-in'
import StopWatch from './stop-watch'

export { StopWatch, StdIn }

export const readInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
}
