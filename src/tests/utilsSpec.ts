import { resizeImage } from '../utils'

describe('Test resizeImage function', () => {
  it('with correct image params', () => {
    expect(async () => {
      await resizeImage('image', 300, 500)
    }).not.toThrow()
  })
})
