import { useState } from "react";
import SinglePhoto from "./SinglePhoto";

const ImageGrid = ({ photos }) => {
	const [selectedPhoto, setSelectedPhoto] = useState(null);

	const handlePhotoClick = (photo) => {
		setSelectedPhoto(photo);
	};

	const handleClosePhoto = () => {
		setSelectedPhoto(null);
	};

	return (
		<>
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
				{photos.map((photo) => (
					<div key={photo.id} className="relative">
						<img
							src={photo.thumbnailUrl}
							alt={photo.title}
							onClick={() => handlePhotoClick(photo)}
							className="w-full h-auto"
						/>
					</div>
				))}
			</div>
			{selectedPhoto ? (
				<SinglePhoto photo={selectedPhoto} onClose={handleClosePhoto} />
			) : null}
		</>
	);
};

export default ImageGrid;
