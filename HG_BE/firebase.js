require('dotenv').config();
import app from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};
class Firebase {
 constructor() {
 app.initializeApp(firebaseConfig);
 }
}
const auth=getAuth(Firebase)
export default {Firebase}