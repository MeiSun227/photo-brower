import axios from "axios";

const getPhotos = async (page, limit) => {
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

const getPhotosByAlbumId = async (albumId, page, limit) => {
	try {
		const photoData = await axios.get(
			`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_page=${page}&_limit=${limit}`
		);
		return photoData.data;
	} catch (error) {
		console.error("Error fetching ablums:", error);
	}
};

const photoServices = {
	getPhotos,
	getAllAlbums,
	getPhotosByAlbumId,
};
export default photoServices;
