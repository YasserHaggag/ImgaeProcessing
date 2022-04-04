import path from 'path';
import supertest from 'supertest';
import app from '../index';
import resize from '../routes/api/imageResize';
import { resizeImage } from '../utilities/ImageProcessing';

const request = supertest(app);
describe('API Resize testsuite', () => {
  it('test the main api route', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('test the api route', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    expect(response.body.Message).toBe('Main API route');
  });

  it('test the Resizeimage function with Valid data', async () => {
    const res = await request.get(
      '/api/imageResize?name=fjord&width=10&height=5'
    );
    expect(res.status).toBe(200);
  });

  it('test the Resizeimage function with string in hieght', async () => {
    const res = await request.get(
      '/api/imageResize?name=fjord&width=50&height=ssssss'
    );
    expect(res.status).toBe(400);
    expect(res.body.Message).toBe('please enter a valid height!');
  });
  it('test the Resizeimage function with string in width', async () => {
    const res = await request.get(
      '/api/imageResize?name=fjord&width=anytext&height=600'
    );
    expect(res.status).toBe(400);
    expect(res.body.Message).toBe('please enter a valid width!');
  });

  it('test the Resizeimage function with wrong image name', async () => {
    const res = await request.get(
      '/api/imageResize?name=ford&width=600&height=600'
    );
    expect(res.status).toBe(404);
    expect(res.body.Message).toBe('The file name is Incorrect or Empty');
  });

  it('test the Resizeimage function with Empty image name', async () => {
    const res = await request.get(
      '/api/imageResize?name=&width=600&hieght=600'
    );
    expect(res.status).toBe(404);
    expect(res.body.Message).toBe('The file name is Incorrect or Empty');
  });

  it('test ResizeImage method', () => {
    expect(async () => {
      await resizeImage('fjord', 20, 50, true);
    }).not.toThrow();
  });
});
