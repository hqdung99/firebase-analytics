import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKRCqR1xR2PxxiABG4zGzjKM3cJeH6eHM",
  authDomain: "todolist-22edc.firebaseapp.com",
  databaseURL: "https://todolist-22edc.firebaseio.com",
  projectId: "todolist-22edc",
  storageBucket: "todolist-22edc.appspot.com",
  messagingSenderId: "337272749066",
  appId: "1:337272749066:web:308615b49d93b34a80b3f3",
  measurementId: "G-25ZGMRMV55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      {
        [1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <button
              key={item}
              style={{ margin: 5 }}
              onClick={() => {
                console.log("item: ", item);
                logEvent(analytics, `test_firebase_analytics_${item}`);
              }}
            >
              {item}
            </button>
          )
        })
      }
    </div>
  );
}

export default App;
