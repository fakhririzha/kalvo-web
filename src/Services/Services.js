import ServicesList from "./ServicesList";

const LOREM_IPSUM =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sapiente.";

const SERVICES = [
	{
		id: Math.random(1000),
		name: "Web Design & Development",
		imgSrc: "./assets/images/web-dev.png",
		description: LOREM_IPSUM,
		tags: ["PHP", "CodeIgniter", "React.js"],
	},
	{
		id: Math.random(1000),
		name: "Photography",
		imgSrc: "./assets/images/photography.png",
		description: LOREM_IPSUM,
		tags: ["Photo", "Gallery"],
	},
	{
		id: Math.random(1000),
		name: "Videography",
		imgSrc: "./assets/images/videography.png",
		description: LOREM_IPSUM,
		tags: ["PremierePro", "Promotion"],
	},
	{
		id: Math.random(1000),
		name: "Motion Graphic",
		imgSrc: "./assets/images/motion-graphic.png",
		description: LOREM_IPSUM,
		tags: ["3D", "Unity", "AfterEffect"],
	},
	{
		id: Math.random(1000),
		name: "Business Branding",
		imgSrc: "./assets/images/business-branding.png",
		description: LOREM_IPSUM,
		tags: ["Trend", "Value", "Popularity"],
	},
	{
		id: Math.random(1000),
		name: "Social Media Management",
		imgSrc: "./assets/images/smm.png",
		description: LOREM_IPSUM,
		tags: ["Instagram", "Facebook", "Ads"],
	},
];

const Services = () => {
	return (
		<section id="services">
			<div className="w-full bg-white p-12">
				<ServicesList services={SERVICES} />
			</div>
		</section>
	);
};

export default Services;
