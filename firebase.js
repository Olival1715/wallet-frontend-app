// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBwM5GTPsuffTT05NKEnI-bb5J2JLMid90',
	authDomain: 'digitalwallet-df064.firebaseapp.com',
	projectId: 'digitalwallet-df064',
	storageBucket: 'digitalwallet-df064.appspot.com',
	messagingSenderId: '927063101756',
	appId: '1:927063101756:web:09f423f2fe98a166660e39',
	measurementId: 'G-KQ96DV7JET',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
