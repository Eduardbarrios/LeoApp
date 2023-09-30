import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./firebaseApp.js";

const auth = getAuth(firebaseApp); // Obtiene la instancia de autenticación usando la app inicializada

const loginUser = async (userInfo) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			userInfo.email,
			userInfo.password
		);
		const user = userCredential.user;
		return user.uid;
	} catch (error) {
		throw error;
	}
};

export { loginUser };
