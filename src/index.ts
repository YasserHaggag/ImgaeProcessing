import express from 'express';
import errormid from './middlewares/errormid';
import routes from './routes';
const app = express();
const port = 3000;

app.use('/api', routes);

app.use(errormid);

app.listen(port, () => {
  console.log(`Server started at localhost: ${port}`);
});

export default app;
