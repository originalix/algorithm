import { StopWatch, writeInt } from 'utils'

const stopWatch = new StopWatch()
const swap = (arr: number[], i: number, j: number): number[] => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

const swapArr = swap([1, 2, 3, 4, 5, 6, 7, 8], 0, 2)
console.log(`current array after swap is: ${swapArr}`)

stopWatch.elapseTime()

const __mock__ = false
const mockLevel = 1000000
__mock__ && writeInt(`${mockLevel}Int`, mockLevel, -mockLevel, mockLevel)
