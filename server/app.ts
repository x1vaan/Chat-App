import express from 'express';
import mongoose from 'mongoose';
import FreeAccess from './routes/FreeAccess';

const app = express();

app.use('/',FreeAccess);

export default app