import HeaderImage from "./HeaderImage";
import HeaderHeadlineText from "./HeaderHeadlineText";
import HeaderDescriptionText from "./HeaderDescriptionText";
import HeaderButton from "./HeaderButton";
import HeaderPopover from "./HeaderPopover";

const Header = (props) => {
	return (
		<section id="main">
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

						<HeaderPopover navigation={props.navigation} />

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
		</section>
	);
};

export default Header;
