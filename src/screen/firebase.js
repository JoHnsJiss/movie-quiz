import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRnzCkLN4e6QTsMV24RG3YV0ie1LCA_4U",
  authDomain: "movie-quiz-host.firebaseapp.com",
  databaseURL: "https://movie-quiz-host.firebaseio.com",
  projectId: "movie-quiz-host",
  storageBucket: "movie-quiz-host.appspot.com",
  messagingSenderId: "1074955238056",
  appId: "1:1074955238056:web:4977b4bea86259e60e209d",
  measurementId: "G-T11VGFVM27"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
