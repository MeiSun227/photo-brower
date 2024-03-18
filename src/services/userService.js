import axios from "axios";

const getUsers = async () => {
	try {
		const userData = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);
		return userData.data;
	} catch (error) {
		console.error("Error fetching images:", error);
	}
};

const getUserDataAndAlbums = async (userId) => {
	try {
		const userDataResponse = axios.get(
			`https://jsonplaceholder.typicode.com/users/${userId}`
		);
		const albumsResponse = axios.get(
			`https://jsonplaceholder.typicode.com/users/${userId}/albums`
		);

		const [userData, albums] = await axios.all([
			userDataResponse,
			albumsResponse,
		]);

		return { userData: userData.data, albums: albums.data };
	} catch (error) {
		console.error("Error fetching user data and albums:", error);
		throw error;
	}
};

const userService = {
	getUsers,
	getUserDataAndAlbums,
};

export default userService;
