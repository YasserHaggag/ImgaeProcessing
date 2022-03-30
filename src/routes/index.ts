import express from 'express'

import resize from './api/imageResize';
const routes=express.Router();

routes.use('/imageResize',resize)

routes.get('/',(req:express.Request,res:express.Response):void=>
{
    res.json({"Message":"Main API route"})
})

export default routes;