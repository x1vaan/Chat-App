"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccountKey_json_1 = __importDefault(require("./serviceAccountKey.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccountKey_json_1.default)
});
exports.default = firebase_admin_1.default;
//En este ejemplo, hemos importado el archivo JSON serviceAccountKey.json y lo hemos asignado a la variable serviceAccount. Luego, hemos 
//pasado serviceAccount como parámetro a admin.credential.cert(), pero hemos indicado que serviceAccount es del tipo admin.ServiceAccount usando 
//el operador as. Esto le dice a TypeScript que interprete serviceAccount como un ServiceAccount válido.
