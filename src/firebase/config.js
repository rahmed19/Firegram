  import * as firebase from 'firebase/app'
  import 'firebase/storage'
  import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBnazeGwdX6ODq2chrzXrdJMbtPopVfkDg",
    authDomain: "firegram-264d4.firebaseapp.com",
    projectId: "firegram-264d4",
    storageBucket: "firegram-264d4.appspot.com",
    messagingSenderId: "622287934251",
    appId: "1:622287934251:web:f6c9384c0b5988e8212b6e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()

  export {projectFirestore, projectStorage}