import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAPVxS26xHg7pEMtxEbCwslJrnXpzg5Cwo',
  authDomain: 'geoninjas-29ce7.firebaseapp.com',
  databaseURL: 'https://geoninjas-29ce7.firebaseio.com',
  projectId: 'geoninjas-29ce7',
  storageBucket: '',
  messagingSenderId: '370029637522',
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
