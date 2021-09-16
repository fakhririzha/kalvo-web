import AboutHeadlineSubText from "./AboutHeadlineSubText";
import AboutHeadlineText from "./AboutHeadlineText";
import AboutHeadlineDescription from "./AboutHeadlineDescription";
import AboutHeadlineBullets from "./AboutHeadlineBullets";

const AboutHeadline = () => {
	return (
		<div className="lg:col-start-2 lg:max-w-2xl ml-auto">
			<AboutHeadlineSubText />
			<AboutHeadlineText />
			<AboutHeadlineDescription />
			<ul className="mt-8 md:grid md:grid-cols-2 gap-6">
				<AboutHeadlineBullets text={"24/7 Support"} />
				<AboutHeadlineBullets text={"Free Consultation"} />
				<AboutHeadlineBullets text={"Multiple Service Options"} />
				<AboutHeadlineBullets text={"100% Satisfaction Guarantee"} />
			</ul>
		</div>
	);
};

export default AboutHeadline;
