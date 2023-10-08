import { createContext, useState } from "react";
import { loginUser } from "../Utils/firebase/firebaseAuth";
import { createUser } from "../Utils/ApiConection/CreateUser";

export const Context = createContext();

export function ContextProvider({ children }) {
	const [userInfo, setCurrentUser] = useState(false);

	//loginFn es una funcion asincrona que ejecuta el metodo de login de firebase
	//el cual debuelve el UID del usuario o un error en caso de que las credenciales no sean correctas.
	async function loginFn(info) {
		try {
			const uid = await loginUser(info);
			console.log(uid);
		} catch (error) {
			console.log(error);
		}
	}
	//seccion de creacion de un nuevo usuario
	const [newUserData, setNewUserData] = useState(null);
	const createUserFn = async (data) => {
		const newUser = await createUser(data);
		console.log("2");
		console.log({ respuest: newUser });
	};

	return (
		<Context.Provider
			value={{
				userInfo,
				setCurrentUser,
				loginFn,
				newUserData,
				setNewUserData,
				createUserFn,
			}}
		>
			{children}
		</Context.Provider>
	);
}
