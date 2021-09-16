const Product = () => {
	return (
		<div className="w-full bg-white p-12">
			<div className="header flex items-end justify-between mb-12">
				<div className="title">
					<p className="text-4xl font-bold text-gray-800 mb-4">Our services</p>
					<p className="text-2xl font-light text-gray-400">
						We guarantee a professional quality for each service provided.
					</p>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
				<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
					<a href="#" className="w-full block h-full">
						<img
							alt="blog photo"
							src="./assets/images/web-dev.png"
							className="max-h-40 w-full object-cover"
						/>
						<div className="bg-white dark:bg-gray-800 w-full p-4">
							<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
								Web Design & Development
							</p>
							<p className="text-gray-400 dark:text-gray-300 font-light text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, sapiente.
							</p>
							<div className="flex flex-wrap justify-starts items-center mt-4">
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#PHP
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#CodeIgniter
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#React.js
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
					<a href="#" className="w-full block h-full">
						<img
							alt="blog photo"
							src="./assets/images/photography.png"
							className="max-h-40 w-full object-cover"
						/>
						<div className="bg-white dark:bg-gray-800 w-full p-4">
							<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
								Photography
							</p>
							<p className="text-gray-400 dark:text-gray-300 font-light text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, sapiente.
							</p>
							<div className="flex flex-wrap justify-starts items-center mt-4">
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Photo
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Gallery
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
					<a href="#" className="w-full block h-full">
						<img
							alt="blog photo"
							src="./assets/images/videography.png"
							className="max-h-40 w-full object-cover"
						/>
						<div className="bg-white dark:bg-gray-800 w-full p-4">
							<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
								Videography
							</p>
							<p className="text-gray-400 dark:text-gray-300 font-light text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, sapiente.
							</p>
							<div className="flex flex-wrap justify-starts items-center mt-4">
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#PremierePro
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Promotion
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
					<a href="#" className="w-full block h-full">
						<img
							alt="blog photo"
							src="./assets/images/motion-graphic.png"
							className="max-h-40 w-full object-cover"
						/>
						<div className="bg-white dark:bg-gray-800 w-full p-4">
							<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
								Motion Graphic
							</p>
							<p className="text-gray-400 dark:text-gray-300 font-light text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, sapiente.
							</p>
							<div className="flex flex-wrap justify-starts items-center mt-4">
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Blender
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Unity
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#AfterEffect
								</div>
							</div>
						</div>
					</a>
				</div>

				<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
					<a href="#" className="w-full block h-full">
						<img
							alt="blog photo"
							src="./assets/images/business-branding.png"
							className="max-h-40 w-full object-cover"
						/>
						<div className="bg-white dark:bg-gray-800 w-full p-4">
							<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
								Business Branding
							</p>
							<p className="text-gray-400 dark:text-gray-300 font-light text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, sapiente.
							</p>
							<div className="flex flex-wrap justify-starts items-center mt-4">
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Trend
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Value
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Popularity
								</div>
							</div>
						</div>
					</a>
				</div>
				<div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
					<a href="#" className="w-full block h-full">
						<img
							alt="blog photo"
							src="./assets/images/smm.png"
							className="max-h-40 w-full object-cover"
						/>
						<div className="bg-white dark:bg-gray-800 w-full p-4">
							<p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
								Social Media Management
							</p>
							<p className="text-gray-400 dark:text-gray-300 font-light text-md">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Obcaecati, sapiente.
							</p>
							<div className="flex flex-wrap justify-starts items-center mt-4">
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Instagram
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Facebook
								</div>
								<div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
									#Ads
								</div>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Product;
