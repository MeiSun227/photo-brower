import axios from "axios";

const getPhotos = async (page, limit) => {
	console.log(page);
	console.log(limit);
	console.log("meiem");
	try {
		const photoData = await axios.get(
			`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
		);
		return photoData.data;
	} catch (error) {
		console.error("Error fetching images:", error);
	}
};

const getAllAlbums = async () => {
	try {
		const albumsData = await axios.get(
			"https://jsonplaceholder.typicode.com/albums"
		);
		return albumsData;
	} catch (error) {
		console.error("Error fetching ablums:", error);
	}
};

const getPhotosByAlbumId = async (albumId) => {
	try {
		const photoData = await axios.get(
			`https://jsonplaceholder.typicode.com//albums/${albumId}/photos`
		);
		return photoData.data;
	} catch (error) {
		console.error("Error fetching ablums:", error);
	}
};

const photoService = {
	getPhotos,
	getAllAlbums,
	getPhotosByAlbumId,
};
export default photoService;
