import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAMI3OqCHmqagJQ4w77U2tKK4281AwcRv8",
  authDomain: "fir-f715e.firebaseapp.com",
  databaseURL: "https://fir-f715e.firebaseio.com",
  projectId: "fir-f715e",
  storageBucket: "",
  messagingSenderId: "651396764290",
  appId: "1:651396764290:web:0d7fc436fde756c50b5a9b",
  measurementId: "G-K47B0VWS0H"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;