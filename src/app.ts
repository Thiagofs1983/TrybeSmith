import express from 'express';
import HttpErrorMiddleware from './middlewares/http.middleware.erro';
import routers from './routers/router';

const app = express();

app.use(express.json());
app.use(routers);
app.use(HttpErrorMiddleware);

export default app;
