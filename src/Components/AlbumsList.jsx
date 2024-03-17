import { Link } from "react-router-dom";

const AlbumList = ({ albums, fetchPhotosByAlbumId }) => {
	const handleAlbumClick = (albumId) => {
		console.log(albumId);
		fetchPhotosByAlbumId(albumId);
	};

	return (
		<div className="max-w-800 mx-auto px-4 sm:px-6 lg:px-8 ">
			<h1 className="text-3xl font-bold text-red-200 p-2 m-2">Albums</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
				{albums.map((album) => (
					<div
						key={album.id}
						className="bg-gray-100 rounded-lg overflow-hidden shadow-md p-3 transition-transform duration-300 ease">
						<Link
							to={`/albums/${album.id}/photos`}
							onClick={() => handleAlbumClick(album.id)}>
							<div className="p-4 text-blue-600 center">
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
