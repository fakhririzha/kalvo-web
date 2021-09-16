import HeaderImage from "./Header/HeaderImage";

import "./App.css";
import HeaderHeadlineText from "./Header/HeaderHeadlineText";
import HeaderDescriptionText from "./Header/HeaderDescriptionText";
import HeaderButton from "./Header/HeaderButton";
import HeaderPopover from "./Header/HeaderPopover";

const App = () => {
	const navigation = [
		{ name: "Home", href: "#" },
		{ name: "About", href: "#" },
		{ name: "Our Work", href: "#" },
		{ name: "Contact", href: "#" },
	];

	return (
		<div className="relative bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<svg
						className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<HeaderPopover navigation={navigation} />

					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<HeaderHeadlineText />
							<HeaderDescriptionText />
							<HeaderButton />
						</div>
					</main>
				</div>
			</div>
			<HeaderImage />
		</div>
	);
};

export default App;
