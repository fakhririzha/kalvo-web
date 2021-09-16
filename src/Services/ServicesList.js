import ServiceItem from "./ServiceItem";

const ServicesList = (props) => {
	return (
		<div>
			<div className="header flex items-end justify-between mb-12">
				<div className="title">
					<p className="text-4xl font-bold text-gray-800 mb-4">Our services</p>
					<p className="text-2xl font-light text-gray-400">
						We guarantee a professional quality for each service provided.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
				{props.services.map((service) => {
					return (
						<ServiceItem
							name={service.name}
							imgSrc={service.imgSrc}
							description={service.description}
							tags={service.tags}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ServicesList;
