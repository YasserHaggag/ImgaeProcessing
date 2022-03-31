import resize from '../routes/api/imageResize';
import {sum} from './../index'
import supertest from 'supertest'
import app  from '../index';
import { resizeImage } from '../utilities/ImageProcessing';

const request=supertest(app)
describe('API Resize testsuite',()=>
{

    it('test the main api route',async ()=>
    {
        const response= await request.get('/api')
        expect(response.status).toBe(200)
    })});

    it('test the api route',async ()=>
    {
        const response= await request.get('/api')
        expect(response.status).toBe(200)
        expect(response.body.Message).toBe('Main API route')
    });

    it('test the Resizeimage function with Valid data', ()=>
    {
       request.get('http://localhost:3000/api/imageResize',()=>
        {
          resizeImage('fjord',50,50,true)
        }).then((res)=>{expect(res.status).toBe(200)})
        
      
    });

    it('test the Resizeimage function with_ Wrong file name', ()=>
    {
       request.get('/api/imageResize',async ()=>
        {
          resizeImage('cord',50,50,false)
        }).then((res)=>{expect(res.status).toBe(200)})
        
      
    });



