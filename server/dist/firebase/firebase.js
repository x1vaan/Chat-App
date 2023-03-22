"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("firebase/app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId } = process.env;
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
};
exports.default = app_1.default.initializeApp(firebaseConfig);
//Recuerda que firebase/app es el módulo principal de Firebase que debe ser importado para utilizar cualquier funcionalidad de Firebase. También es importante 
//tener en cuenta que no debes importar el paquete completo de Firebase con import firebase from 'firebase', ya que esto puede causar problemas con la 
//compatibilidad de versiones y aumentar el tamaño de tu paquete.
