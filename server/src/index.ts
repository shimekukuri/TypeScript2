import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as controllerRouter } from './controllers/decorators/controller';
import './controllers/LoginControllers';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asd;lfkjasf'] }));
app.use(router);
app.use(controllerRouter);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
