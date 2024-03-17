import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumList from "./Components/AlbumsList";
import ImageGrid from "./Components/ImageGrid";
import NavBar from "./Components/NavBar/NavBar";
import photoService from "./services/photoService";

const AppRouter = () => {
	const [albums, setAlbums] = useState([]);
	const [photos, setPhotos] = useState([]);
	const [allPhotos, setAllPhotos] = useState([]);

	const fetchPhotosByAlbumId = async (albumId) => {
		try {
			const photos = await photoService.getPhotosByAlbumId(albumId);
			setPhotos(photos);
			console.log("Photos for album", albumId, ":", photos);
		} catch (error) {
			console.error("Error fetching photos for album", albumId, ":", error);
		}
	};

	useEffect(() => {
		photoService.getAllAlbums().then((response) => {
			setAlbums(response.data);
		});
		photoService.getPhotos().then((response) => {
			setAllPhotos(response.data);
		});
	}, []);

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					exact
					path="/albums"
					element={
						<AlbumList
							albums={albums}
							fetchPhotosByAlbumId={fetchPhotosByAlbumId}
						/>
					}
				/>
				<Route
					path="/albums/:id/photos"
					element={<ImageGrid photos={photos} />}
				/>
				<Route exact path="/" element={<ImageGrid photos={allPhotos} />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
