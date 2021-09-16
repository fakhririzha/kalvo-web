import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import "./App.css";

const App = () => {
	return (
		<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
			<div className="flex-shrink-0">
				<img
					className="h-12 w-12"
					src="./favicon.ico"
					alt="React.js Logo"
				></img>
			</div>
			<div>
				<div className="text-xl font-medium text-black">React</div>
				<p className="text-gray-500">You have a new application!</p>
			</div>
		</div>
	);
};

export default App;
