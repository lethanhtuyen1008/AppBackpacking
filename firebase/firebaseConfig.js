import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAlSgXf4Q9_AUf1Va6uc3DsdFdepagrZOM',
  authDomain: 'my-project-1567141251240.firebaseapp.com',
  databaseURL: 'https://my-project-1567141251240.firebaseio.com',
  projectId: 'my-project-1567141251240',
  storageBucket: 'my-project-1567141251240.appspot.com',
  messagingSenderId: '1084394616122',
  appId: '1:1084394616122:web:ac31009187ba321b034c03',
  measurementId: 'G-YC98PZR7ZK',
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);