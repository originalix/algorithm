import LSD from '@/algs4/strings/lsd'
describe('字符串算法测试 lix', () => {
  test('LSD', () => {
    const strings = [
      '4PGC938',
      '2IYE230',
      '3CI0720',
      '1ICK750',
      '10HV845',
      '4JZY524',
      '1ICK750',
      '3CI0720',
      '10HV845',
      '10HV845',
      '2RLA629',
      '2RLA629',
      '3ATW723'
    ]
    LSD.sort(strings, 7)
    expect(strings).toStrictEqual([
      '10HV845',
      '10HV845',
      '10HV845',
      '1ICK750',
      '1ICK750',
      '2IYE230',
      '2RLA629',
      '2RLA629',
      '3ATW723',
      '3CI0720',
      '3CI0720',
      '4JZY524',
      '4PGC938'
    ])
  })
})
