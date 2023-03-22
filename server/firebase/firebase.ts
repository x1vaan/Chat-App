import firebase from 'firebase/app';
import dotenv from 'dotenv';

dotenv.config()

const {apiKey,authDomain,projectId,storageBucket,messagingSenderId,appId,measurementId} = process.env;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
};


export default firebase.initializeApp(firebaseConfig);

//Recuerda que firebase/app es el módulo principal de Firebase que debe ser importado para utilizar cualquier funcionalidad de Firebase. También es importante 
//tener en cuenta que no debes importar el paquete completo de Firebase con import firebase from 'firebase', ya que esto puede causar problemas con la 
//compatibilidad de versiones y aumentar el tamaño de tu paquete.