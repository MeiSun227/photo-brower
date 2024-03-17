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
			<div className="gallery">
				{photos.map((photo) => (
					<div key={photo.id}>
						<img
							src={photo.thumbnailUrl}
							alt={photo.title}
							onClick={() => handlePhotoClick(photo)}
							className="thumbnail"
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
