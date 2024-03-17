import { AiFillCloseCircle } from "react-icons/ai";

const SinglePhoto = ({ photo, onClose }) => {
	return (
		<div className="fixed inset-0 top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center">
			<div className="max-w-auto h-auto   p-2 m-2">
				<img src={photo.url} alt={photo.title} />
			</div>
			<p className="text-white mt-4 pl-4 ">{photo.title}</p>
			<button
				className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-transparent text-white text-lg cursor-pointer"
				onClick={onClose}>
				<AiFillCloseCircle className="text-4xl lg:text-[36px]  " />
			</button>
		</div>
	);
};

export default SinglePhoto;
