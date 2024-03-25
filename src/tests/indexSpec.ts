import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('test resize endpoint response', () => {
  it('with correct file name, width and height', async () => {
    const response = await request.get('/api/resize?file_name=image&width=9010&height=1234')
    expect(response.status).toBe(200)
  })
})
