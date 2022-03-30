import express from 'express';
import path from 'path';
import { imagenames, resizeImage, queries } from '../../utilities/ImageProcessing';
import sharp from 'sharp';
import fsPromises from 'fs'
import { nextTick } from 'process';
const resize = express.Router();



resize.get('/',async (req:express.Request, res:express.Response, resizedimages):Promise<void> => {
   const name = req.query.name as string;
   const width = Number(req.query.width);
   const height = Number(req.query.height);
   let isImageexist = imagenames.includes(name);
   try {
      await resizeImage(name, width, height, isImageexist);
     

      res.sendFile(`D:/Udacity/imageProcessingProject/fileStorage/resizedimages/${name}_${width}_${height}.jpg`);



   } catch (err) {
      

   };




})


export default resize;