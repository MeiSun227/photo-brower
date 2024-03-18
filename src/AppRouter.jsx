import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlbumList from "./Components/AlbumList";
import AlbumPhotos from "./Components/AlbumPhotos";
import NavBar from "./Components/NavBar";
import PhotosGallery from "./Components/PhotoGallery";
import UserList from "./Components/UserList";
import UserAlbums from "./Components/UserAlbums";
import photoServices from "./services/photoServices";

const AppRouter = () => {
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		photoServices.getAllAlbums().then((response) => {
			setAlbums(response.data);
		});
	}, []);

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/users/:id/albums" element={<UserAlbums />} />
				<Route exact path="/users" element={<UserList />} />
				<Route path="/albums/:id/photos" element={<AlbumPhotos />} />
				<Route exact path="/albums" element={<AlbumList albums={albums} />} />
				<Route exact path="/" element={<PhotosGallery />} />
			</Routes>
		</Router>
	);
};

export default AppRouter;
