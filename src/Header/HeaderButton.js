import HeaderButtonItem from "./HeaderButtonItem";

const HeaderButton = () => {
	const mainClass =
		"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10";

	return (
		<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
			<HeaderButtonItem
				mainClass={"rounded-md shadow"}
				linkClass={mainClass + " text-white bg-green-600 hover:bg-green-700"}
				content={"Our services"}
			/>
			<HeaderButtonItem
				mainClass={"mt-3 sm:mt-0 sm:ml-3"}
				linkClass={
					mainClass + " text-green-700 bg-green-100 hover:bg-green-200"
				}
				content={"Learn more"}
			/>
		</div>
	);
};

export default HeaderButton;
