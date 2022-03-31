
import sharp from "sharp";
import path from "path";
import fsPromises from 'fs';
const imagenames: string[] = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica', 'output']

interface queries {
   name: string;
   width: Number;
   height: Number;



};

  async function resizeImage(name: string, width: number, height: number, existingimage: boolean):Promise<void> {

   const location = path.resolve('./') + `/fileStorage/${name}.jpg`;
   const locations = path.resolve('./') + `/fileStorage/resizedimages/${name}_${width}_${height}.jpg`;
   if (name === undefined || existingimage == false) {
      
      return console.log('File name is incorrect!')

   } else if (height == null || height == NaN) {
      return console.log('please enter a valid heigh!')

   } else if (width == null || width == NaN) {
      return console.log('please enter a valid width!')
   }


  
/*   async function res()
  {
   await sharp(location).toFile(locations).then(()=>
   {
      sharp(location).resize(width, height).toFile(locations);

   })


  }
  res(); */
      
     
   
   
 await  sharp(location)
  
  .resize(width,height)
  .jpeg({ mozjpeg: true })
  .toFile(locations)
  .catch( err => { console.log(err) });

  

  
 



}

export { imagenames, resizeImage, queries }