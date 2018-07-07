import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBQTB0q-MUl8n69--2HbimwPw5USFSM130',
  authDomain: 'ninja-smoothies-3c7f4.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-3c7f4.firebaseio.com',
  projectId: 'ninja-smoothies-3c7f4',
  storageBucket: 'ninja-smoothies-3c7f4.appspot.com',
  messagingSenderId: '858650884889'
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })
// export firestore db
export default firebaseApp.firestore()
