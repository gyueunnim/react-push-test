import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

// Firebase 구성 정보 가져오기
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Messaging 초기화
const messaging = getMessaging(app);

getToken(messaging, { vapidKey: 'BI-_sWLOnaahPCqAvw8zFydQz1yR24QkOp817njCh_VWqLCGjdSbr3MtvjvHqbrz8D1cBXKdB8rab5O3hDoTTmk' }).then((currentToken) => {
  if(currentToken) {
    console.log('FCM 토큰: ', currentToken);
  } else {
    console.log('FCM 토큰이 없습니다.');
  }
}).catch((error) => {
  console.log('FCM 토큰 가져오기 오류 : ', error);
})

onMessage(messaging, (payload) => {
  console.log('Received foreground Message : ', payload.notification)
  const { title, body } = payload.notification;
  new Notification(title, { body })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
