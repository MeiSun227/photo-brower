import axios from "axios";

const getPhotos = async () => {
	try {
		const photoData = await axios.get(
			"https://jsonplaceholder.typicode.com/photos"
		);
		return photoData;
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
