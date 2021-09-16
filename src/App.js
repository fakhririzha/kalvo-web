import "./App.css";

import Header from "./Header/Header";
import About from "./About/About";
import Product from "./Product/Product";

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
			<Product />
		</div>
	);
};

export default App;
