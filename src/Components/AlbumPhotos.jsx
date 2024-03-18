import { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";
import photoServices from "../services/photoServices";
import { useParams } from "react-router-dom";

const AlbumPhotos = () => {
	const { id } = useParams();
	const [photos, setPhotos] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 10;
	const totalPhotos = 50;
	const totalPages = Math.ceil(totalPhotos / limit);

	useEffect(() => {
		const fetchPhotoData = async () => {
			try {
				const photoData = await photoServices.getPhotosByAlbumId(
					id,
					currentPage,
					limit
				);
				setPhotos(photoData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchPhotoData();
	}, [id, currentPage]);

	const nextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const previosPage = () => {
		setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
	};

	return (
		<div>
			<h1 className=" text-2xl font-bold p-2 text-blue-400">Photos</h1>
			<ImageGrid photos={photos} />
			<div className="p-4 mt-4">
				<button
					onClick={previosPage}
					disabled={currentPage === 1}
					className={`p-2 m-2  rounded w-40 inline-block ${
						currentPage === 1
							? "bg-gray-300 cursor-not-allowed"
							: "bg-blue-500 hover:bg-blue-600 text-white"
					}`}>
					Previous
				</button>

				<button
					onClick={nextPage}
					className={`p-2 m-2 rounded w-40 inline-block ${
						currentPage === totalPages
							? "bg-gray-300 cursor-not-allowed"
							: "bg-blue-500 hover:bg-blue-600 text-white"
					}`}>
					Next
				</button>
			</div>
		</div>
	);
};

export default AlbumPhotos;
