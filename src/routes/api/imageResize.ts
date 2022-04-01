import express, { NextFunction } from 'express';
import path from 'path';
import { nextTick } from 'process';
import { imagenames, resizeImage, queries } from '../../utilities/ImageProcessing';


const resize = express.Router();



resize.get('/', async (req: express.Request, res: express.Response,next:NextFunction): Promise<void> => {
   const name = req.query.name as string;
   const width = Number(req.query.width);
   const height = Number(req.query.height);
   let isImageexist = imagenames.includes(name);

   if (name === undefined || isImageexist == false) {

      res.status(400).json({ "Message": "The file name is Incorrect or Empty" })


   } else if (height == null || isNaN(height) || height ==0) {
      res.status(400).json({ "Message": 'please enter a valid heigh!' })

   } else if (width == null ||  isNaN(width) || width ==0) {
      res.status(400).json({ "Message": 'please enter a valid Width!' })
     

   } else {
      await resizeImage(name, width, height, isImageexist);
      res.sendFile(path.resolve('./') + `/fileStorage/resizedimages/${name}_${width}_${height}.jpg`);
     
   }
   
   next();
})


export default resize;