import { Link } from "react-router-dom";

const AlbumList = ({ albums, fetchPhotosByAlbumId }) => {
	const handleAlbumClick = (albumId) => {
		console.log(albumId);
		fetchPhotosByAlbumId(albumId);
	};

	return (
		<div className="album-container">
			<h1>Albums</h1>
			<div className="album-grid">
				{albums.map((album) => (
					<div key={album.id} className="album-card">
						<Link
							to={`/albums/${album.id}/photos`}
							onClick={() => handleAlbumClick(album.id)}>
							<div className="album-info">
								<p>{album.title}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default AlbumList;
