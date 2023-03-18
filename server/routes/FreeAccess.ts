import { Router, Request, Response } from "express";
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {PASSWORD} = process.env;

const pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'chat_app',
      password: PASSWORD,
      port: 5432,
    });

const router = Router();

router.post('/register', async (req: Request, res: Response):Promise<any | void> => {
    try {
        const {username, email, password} = req.body;
        const query = 'INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)';
        const values = [username,email,password];
        pool.query(query, values , (err, data) => {
            if(err){
                console.log(err)
                res.status(500).json(err)
            } else {
                console.log(data)
                res.status(201).json(data)
            }
       });
    } catch (error) {
        res.status(500)
    }
});

export default router