// tslint:disable:typedef

import * as bodyParser from 'body-parser';
import * as connMongo from 'connect-mongo';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as session from 'express-session';

import {mongoConnection} from './mongodb';

var app = express();

let secret = 'atgasdv82aergfnsg';
app.use(cookieParser(secret));

let mongoStore = connMongo(session);
let options:
    connMongo.MogooseConnectionOptions = {mongooseConnection: mongoConnection};
let store = new mongoStore(options);
app.use(session({secret, store}));


export default app;