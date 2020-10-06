import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCSR4Tj4565DU7vwRbGvlwKG4zzLmWLq6M",
  authDomain: "gardening-app-36535.firebaseapp.com",
  databaseURL: "https://gardening-app-36535.firebaseio.com",
  projectId: "gardening-app-36535",
  storageBucket: "gardening-app-36535.appspot.com",
  messagingSenderId: "387440875140",
  appId: "1:387440875140:web:3070e71a46d8d25cb554d1",
  measurementId: "G-KEJ9KX3SMS"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
