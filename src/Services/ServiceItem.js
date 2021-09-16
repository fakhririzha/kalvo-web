const ServiceItem = (props) => {
	return (
		<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
			<a href="#" className="w-full block h-full">
				<img
					alt="blog photo"
					src={props.imgSrc}
					className="max-h-40 w-full object-cover"
				/>
				<div className="bg-white dark:bg-gray-800 w-full p-4">
					<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
						{props.name}
					</p>
					<p className="text-gray-400 dark:text-gray-300 font-light text-md">
						{props.description}
					</p>
					<div className="flex flex-wrap justify-starts items-center mt-4">
						{props.tags.map((tag) => {
							return (
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#{tag}
								</div>
							);
						})}
					</div>
				</div>
			</a>
		</div>
	);
};

export default ServiceItem;
