import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userService from "../services/userService";

const UserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userService.getUsers().then((response) => {
			setUsers(response);
		});
	}, []);

	return (
		<div className="container mx-auto px-4">
			<h1 className="text-2xl font-bold mb-4">Users</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{users.map((user) => (
					<Link to={`/users/${user.id}/albums`} key={user.id}>
						<div className="bg-white shadow-lg rounded-lg flex items-center p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
							<div className="w-12 h-12 rounded-full flex items-center justify-center bg-indigo-400 mr-4">
								<span className="text-white font-semibold">
									{user.username.charAt(0).toUpperCase()}
								</span>
							</div>
							<div>
								<h3 className="text-lg font-semibold">{user.username}</h3>
								<p className="text-gray-600 text-s">{user.company.name}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default UserList;
