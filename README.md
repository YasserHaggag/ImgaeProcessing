# ImgaeProcessing
Project Name: Image Processing

Scripts To be Used through CMD
 "prettier": npm run prettier
    "lint": npm run lint
    "build": npm run build
    "test": npm run test
    "start the server":Npm run start
## Usage
The server will listen on port 3000:

## Endpoint to resize images
http://localhost:3000/api/imageResize

## Expected query parameters are:

### File name:
to be one of these images names:
{encenadaport,fjord,icelandwaterfall,palmtunnel,santamonica}
### width:
number value
### height:
number value

#### Example 1
http://localhost:3000/api/imageResize?name=fjord Will display the original fjord image.

#### Example 2
http://localhost:3000/api/imageResize?name=fjord&width=200&height=200 Will scale the fjord image to 200 by 200 pixels and store the resulting image.

