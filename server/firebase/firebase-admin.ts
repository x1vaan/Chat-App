import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

export default admin

//En este ejemplo, hemos importado el archivo JSON serviceAccountKey.json y lo hemos asignado a la variable serviceAccount. Luego, hemos 
//pasado serviceAccount como parámetro a admin.credential.cert(), pero hemos indicado que serviceAccount es del tipo admin.ServiceAccount usando 
//el operador as. Esto le dice a TypeScript que interprete serviceAccount como un ServiceAccount válido.