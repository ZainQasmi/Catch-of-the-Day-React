import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDbyiNeBb5g8H40NtzxCCcX4ut03yTUHrM",
  authDomain: "catch-of-the-day-react-js.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-react-js.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
