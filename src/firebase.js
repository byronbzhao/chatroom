import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDLCgxYhcT6u2f1uhXNbiCdVBhYnIZsKoo',
    authDomain: 'chat-room-40ddf.firebaseapp.com',
    projectId: 'chat-room-40ddf',
    storageBucket: 'chat-room-40ddf.appspot.com',
    messagingSenderId: '103865383487',
    appId: '1:103865383487:web:18651e6ab8416c5b39d68a',
  })
  .auth();
