import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="bg-gray-800 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<div className="logo">
							<Link to="/" className="text-white font-bold text-xl">
								Photo Browser
							</Link>
						</div>
					</div>
					<div className="block md:block">
						<ul className="ml-4 flex items-center space-x-4">
							<li className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
								<Link to="/">Photos</Link>
							</li>
							<li className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
								<Link to="/Albums">Albums</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
