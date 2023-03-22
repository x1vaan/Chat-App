"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
const firebase_admin_1 = __importDefault(require("../firebase/firebase-admin"));
dotenv_1.default.config();
const { PASSWORD } = process.env;
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'chat_app',
    password: PASSWORD,
    port: 5432,
});
const router = (0, express_1.Router)();
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const userCredential = yield firebase_admin_1.default.auth().createUser({
            email: email,
            password: password
        });
        const query = 'INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)';
        const values = [username, email, password];
        pool.query(query, values, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).json(err);
            }
            else {
                console.log(data);
                res.status(201).json(userCredential);
            }
        });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
}));
exports.default = router;
