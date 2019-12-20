import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyA8334aUVQNx-PPnGMoqCxdBx-Esral_4k",
  authDomain: "backpacking-d8834.firebaseapp.com",
  databaseURL: "https://backpacking-d8834.firebaseio.com",
  projectId: "backpacking-d8834",
  storageBucket: "backpacking-d8834.appspot.com",
  messagingSenderId: "747236374471",
  appId: "1:747236374471:web:96b1a021187935f7860be2",
  measurementId: "G-RCBKHTWYRT",
};
export const firebaseApp = firebase.initializeApp(config);
