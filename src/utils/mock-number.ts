const fs = require('fs')
const path = require('path')

export const readInt = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export const writeInt = (
  fileName: string,
  size: number = 10000,
  min: number = 0,
  max: number = 10000
) => {
  const mock = []
  for (let i = 0; i < size; i++) {
    mock.push(readInt(min, max))
  }
  const filePath = path.resolve(__dirname, `../src/mock/${fileName}.txt`)
  fs.writeFile(filePath, mock.join('\n'), 'utf8', (err: Error | undefined) => {
    if (err) throw err
    console.log('文件已保存')
  })
}
