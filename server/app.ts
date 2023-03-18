import express from 'express';
import FreeAccess from './routes/FreeAccess';
import cors from 'cors';

const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors({origin: '*'}))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.use('/',FreeAccess);

export default app