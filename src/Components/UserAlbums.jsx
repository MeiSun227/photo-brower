import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userService from "../services/userService";
import AlbumList from "./AlbumList";

const UserAlbums = () => {
	const { id } = useParams();
	const [albums, setAlbums] = useState([]);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { userData, albums } = await userService.getUserDataAndAlbums(id);
				setUser(userData);
				setAlbums(albums);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [id]);

	return (
		<div>
			{user && (
				<div className="bg-gray-100 p-6 rounded-lg shadow-md">
					<h2 className="text-lg font-bold mb-2">User Information</h2>
					<p className="text-gray-800">
						<span className="font-semibold">User Name:</span> {user.name}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold">User Email:</span> {user.email}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold">User Number:</span> {user.phone}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold">User Website:</span> {user.website}
					</p>
					<p className="text-gray-800">
						<span className="font-semibold">Albums:</span>
						{albums.length}
					</p>
				</div>
			)}
			<div>
				<AlbumList albums={albums} />
			</div>
		</div>
	);
};

export default UserAlbums;
