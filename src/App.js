import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';

function App() {
  function requestPermission() {
    console.log("권한 요청 중...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("알림 권한이 허용됨");
  
        // FCM 메세지 처리
      } else {
        console.log("알림 권한 허용 안됨");
      }
    });
  }

  useEffect(() => {
    requestPermission()
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
