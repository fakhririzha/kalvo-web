const HeaderButtonItem = (props) => {
	return (
		<div className={props.mainClass}>
			<a href="#" className={props.linkClass}>
				{props.content}
			</a>
		</div>
	);
};

export default HeaderButtonItem;
