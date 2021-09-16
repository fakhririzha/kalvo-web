const HeaderImage = () => {
	return (
		<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="https://images.unsplash.com/photo-1584224549374-995cbac1ab62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
				alt=""
			/>
		</div>
	);
};

export default HeaderImage;
