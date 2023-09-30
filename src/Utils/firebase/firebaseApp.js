import { initializeApp } from "firebase/app";
/* import {
	API_KEY,
	AUTH_DOMAIN,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID,
	APP_ID,
	MEASUREMENT_ID,
} from "@env";

const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MESSAGING_SENDER_ID,
	appId: APP_ID,
	measurementId: MEASUREMENT_ID,
}; */

const firebaseConfig = {
	apiKey: "AIzaSyAcJb1sdrVTZaDC0iU5tTGsfZP3mXSss7A",
	authDomain: "leoapp-auth.firebaseapp.com",
	projectId: "leoapp-auth",
	storageBucket: "leoapp-auth.appspot.com",
	messagingSenderId: "251743045876",
	appId: "1:251743045876:web:4ba3c100a79f9b9da576a1",
	measurementId: "G-M1XC018FVV",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };
