import "./App.css";

import Header from "./Header/Header";
import About from "./About/About";
import Services from "./Services/Services";

const App = () => {
	const navigation = [
		{ name: "Home", href: "#" },
		{ name: "About", href: "#" },
		{ name: "Our Work", href: "#" },
		{ name: "Contact", href: "#" },
	];

	return (
		<div>
			<Header navigation={navigation} />
			<About />
			<Services />
		</div>
	);
};

export default App;
