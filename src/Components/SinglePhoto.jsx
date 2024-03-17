const SinglePhoto = ({ photo, onClose }) => {
	console.log("mei");
	console.log(photo);
	return (
		<div className="single-photo-view ">
			<img src={photo.url} alt={photo.title} />
			<p>{photo.title}</p>
			<button onClick={onClose}>Close</button>
		</div>
	);
};

export default SinglePhoto;
