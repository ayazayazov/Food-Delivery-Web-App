// firebaseAdmin.js
import admin from 'firebase-admin';

if (!admin.apps.length) {
  const serviceAccount = require('./food-delivery-app-0-firebase-adminsdk-giipn-f81ee580d3.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
