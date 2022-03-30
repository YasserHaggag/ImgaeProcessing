"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.imagenames = void 0;
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var imagenames = ['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica', 'output'];
exports.imagenames = imagenames;
;
function resizeImage(name, width, height, existingimage) {
    var location = path_1.default.resolve('./') + "/fileStorage/".concat(name, ".jpg");
    var locations = path_1.default.resolve('./') + "/fileStorage/resizedimages/".concat(name, "_").concat(width, "_").concat(height, ".jpg");
    if (name === undefined || existingimage == false) {
        return console.log('File name is incorrect!');
    }
    else if (height == null || height == NaN) {
        return console.log('please enter a valid heigh!');
    }
    else if (width == null || width == NaN) {
        return console.log('please enter a valid width!');
    }
    /*   async function res()
      {
       await sharp(location).toFile(locations).then(()=>
       {
          sharp(location).resize(width, height).toFile(locations);
    
       })
    
    
      }
      res(); */
    (0, sharp_1.default)(location)
        .resize(width, height)
        .jpeg({ mozjpeg: true })
        .toFile(locations)
        .catch(function (err) { console.log(err); });
}
exports.resizeImage = resizeImage;
