import express, { NextFunction } from 'express';
import path from 'path';
import { imagenames, resizeImage, queries } from '../../utilities/ImageProcessing';
import fs from 'fs'


const resize = express.Router();


resize.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
   const name = req.query.name as string;
   const width = Number(req.query.width);
   const height = Number(req.query.height);
   const outputlocation = path.resolve('./') + `/fileStorage/resizedimages/${name}_${width}_${height}.jpg`;

   let isImageexist = imagenames.includes(name);
   try {

      if (name === undefined || isImageexist == false) {

         res.status(404).json({ "Message": "The file name is Incorrect or Empty" })


      } else if (height == null || isNaN(height) || height == 0) {
         res.status(400).json({ "Message": 'please enter a valid height!' })

      } else if (width == null || isNaN(width) || width == 0) {
         res.status(400).json({ "Message": 'please enter a valid width!' })


      } else if (fs.existsSync(outputlocation)) {
         res.sendFile(path.resolve('./') + `/fileStorage/resizedimages/${name}_${width}_${height}.jpg`);



      } else {

         await resizeImage(name, width, height, isImageexist);
         res.sendFile(path.resolve('./') + `/fileStorage/resizedimages/${name}_${width}_${height}.jpg`);




      }



   } catch (error) {
      throw new Error();


   }



})



export default resize;