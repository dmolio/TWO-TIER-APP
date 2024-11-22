const request = require('supertest');
const mysql = require('mysql');

// Mock MySQL
jest.mock('mysql', () => ({
  createConnection: jest.fn(() => ({
    connect: jest.fn((callback) => callback(null)),
    query: jest.fn(),
    end: jest.fn(),
  }))
}));

const { app, server } = require('../app');

describe('Basic Route Tests', () => {
  afterAll(done => {
    server.close(done);
  });

  test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
}); 