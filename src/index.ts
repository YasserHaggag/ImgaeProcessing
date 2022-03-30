import express from 'express';
import routes from './routes';
const app=express();
const port = 3000;


app.use('/api',routes)


app.get('/api',(req:express.Request,res:express.Response):void=>
{
    res.json({"Message":"Hello the bellow is your answer","Answer":[`This is the number that you'll get : ${sum(3,7)}`,sum(9,156)]})

});
app.listen(port,()=>
{
    console.log(`Server started at localhost: ${port}`)
})


export default app



function sum(x:number,y:number):number
{
    return x+y
}
//console.log(sum(5,6))
export{sum}
