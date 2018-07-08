import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB08E_UNX0CcXZMKsxw5bGoN2rwEvrGzIc',
  authDomain: 'newchat-app-3cb17.firebaseapp.com',
  databaseURL: 'https://newchat-app-3cb17.firebaseio.com',
  projectId: 'newchat-app-3cb17',
  storageBucket: '',
  messagingSenderId: '318410360049',
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
