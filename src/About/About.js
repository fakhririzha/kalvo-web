import AboutHeadline from "./AboutHeadline";
import AboutImageShowcase from "./AboutImageShowcase";

const About = () => {
	return (
		<section id="about">
			<div className="max-w-full p-4 bg-green-600 px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-0">
				<div className="relative">
					<div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
						<AboutHeadline />
						<AboutImageShowcase />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
