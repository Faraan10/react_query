import axios from "axios";

const getApi = async () => {
	const response = await axios({
		url: "http://localhost:5000/api/tasks",
		method: "GET",
		headers: { "Content-Type": "application/json" },
	});
	return response.data;
};

export default getApi;
