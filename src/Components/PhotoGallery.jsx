import { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";
import photoService from "../services/photoService";

const PhotosGallery = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [photos, setPhotos] = useState([]);
	const limit = 12;
	const totalPhotos = 5000;
	const totalPages = Math.ceil(totalPhotos / limit);

	useEffect(() => {
		const fetchPhotoData = async () => {
			try {
				const photoData = await photoService.getPhotos(currentPage, limit);
				setPhotos(photoData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchPhotoData();
	}, [currentPage]);

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
				<span className="text-gray-700">
					{currentPage} / {totalPages}
				</span>
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

export default PhotosGallery;
