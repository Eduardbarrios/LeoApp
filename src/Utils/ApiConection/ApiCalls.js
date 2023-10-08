const baseUrl = "http://127.0.0.1:3000/api";

const apiRequest = async (method, endpoint, data = null) => {
	console.log("4");
	const url = `${baseUrl}/${endpoint}`;
	const headers = {
		"Content-Type": "application/json",
		// Puedes agregar más headers si es necesario
	};

	const config = {
		method,
		headers,
		body: data ? JSON.stringify(data) : null,
	};

	try {
		const response = await fetch(url, config);
		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || "Error en la solicitud");
		}

		return responseData;
	} catch (error) {
		console.error("API Request Error:", error.message);
		throw error;
	}
};

export { apiRequest };
