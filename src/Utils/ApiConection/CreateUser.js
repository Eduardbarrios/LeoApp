import { apiRequest } from "./ApiCalls";

const createUser = async (userData) => {
	console.log("3");
	await apiRequest("POST", "create-user", userData);
};

export { createUser };
