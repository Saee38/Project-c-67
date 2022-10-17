import firebase from 'firebase';
// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAVT6FrnvhLJLR2ppAxgN1btogA6n9KiYU",
  authDomain: "team-voting-app-76e12.firebaseapp.com",
  projectId: "team-voting-app-76e12",
  storageBucket: "team-voting-app-76e12.appspot.com",
  messagingSenderId: "397626093966",
  appId: "1:397626093966:web:1a8478171aa3cbff45b4df"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();