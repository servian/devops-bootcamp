const app = require('../../app')
const supertest = require('supertest')
const request = supertest(app)

describe('Register', () => {
  it('Should Register a new user and redirect to login', async () => {
    const res = await request
      .post('/users/register')
      .send({
        name: 'pete',
        email: 'pete@rmit.com.au',
        password: 'demo',
        password2: 'demo'
      })
    //console.log(res)
    expect(res.statusCode).toEqual(302)
    expect(res.headers['location']).toEqual('/users/login')

    // end(done)    
  })
})


describe('FailLogin', () => {
  it('should fail with incorrect credentials and redirect to login page', async () => {
    const res = await request
      .post('/users/login')
      .send({
        email: 'pete@rmit.com.au',
        password: 'wrongpassword'
      })
    //console.log(res)
    expect(res.statusCode).toEqual(302)
    expect(res.headers['location']).toEqual('/users/login')

    // end(done)    
  })
})

describe('SuccessLogin', () => {
  it('should pass with correct credentials and redirect to /todos', async () => {
    const res = await request
      .post('/users/login')
      .send({
        email: 'pete@rmit.com.au',
        password: 'demo'
      })
    //console.log(res)
    expect(res.statusCode).toEqual(302)
    expect(res.headers['location']).toEqual('/todos')

    // end(done)    
  })
})
