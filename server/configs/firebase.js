// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5zuw5iMHbXfNdniaiE5xNkYgfvC82RoQ',
  authDomain: 'food-delivery-app-0.firebaseapp.com',
  projectId: 'food-delivery-app-0',
  storageBucket: 'food-delivery-app-0.appspot.com',
  messagingSenderId: '123860788185',
  appId: '1:123860788185:web:c9c087782c4d61b3522fc8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
