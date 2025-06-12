import { useState } from "react";
import "./App.css";
import Star from "./Star";
import { useEffect } from "react";

function App() {
	const [stars, setStars] = useState(
		new Array(5).fill(false).map(() => {
			return {
				id: Math.random(),
				first: {
					isHovered: false,
					isSelected: false,
				},
				second: {
					isHovered: false,
					isSelected: false,
				},
			};
		})
	);

	const onMouseMove = (e) => {
		// get x coordinate of the target element
		const target = e.currentTarget;
		const width = target.getBoundingClientRect().width;

		const rect = target.getBoundingClientRect();
		const index = target.getAttribute("data-index");

		const xCovered = Math.floor(e.clientX - rect.left);

		const isWholeStar = xCovered > width / 2;

		setStars((prev) => {
			return prev.map((star, i) => {
				if (i < index - 1 && !star.second.isSelected) {
					return {
						...star,
						first: {
							...star.first,
							isHovered: true,
						},
						second: {
							...star.second,
							isHovered: true,
						},
					};
				} else if (i === index - 1) {
					return {
						...star,
						first: {
							...star.first,
							isHovered: true,
						},
						second: {
							...star.second,
							isHovered: isWholeStar,
						},
					};
				}
				return star;
			});
		});
	};
	const onMouseOut = (e) => {
		const target = e.currentTarget;
		const index = target.getAttribute("data-index");
		setStars((prev) => {
			return prev.map((star, i) => {
				if (star.first.isHovered || star.second.isHovered) {
					return {
						...star,
						first: {
							...star.first,
							isHovered: false,
						},
						second: {
							...star.second,
							isHovered: false,
						},
					};
				}
				return star;
			});
		});
	};

	const onClick = (e) => {
		const target = e.currentTarget;
		const width = target.getBoundingClientRect().width;

		const rect = target.getBoundingClientRect();
		const index = target.getAttribute("data-index");

		const xCovered = Math.floor(e.clientX - rect.left);

		const isWholeStar = xCovered > width / 2;

		setStars((prev) => {
			return prev.map((star, i) => {
				if (i < index - 1) {
					return {
						...star,
						first: {
							...star.first,
							isSelected: true,
						},
						second: {
							...star.second,
							isSelected: true,
						},
					};
				} else if (i === index - 1) {
					return {
						...star,
						first: {
							...star.first,
							isSelected: true,
						},
						second: {
							...star.second,
							isSelected: isWholeStar,
						},
					};
				}
				return {
					...star,
					first: {
						...star.first,
						isSelected: false,
					},
					second: {
						...star.second,
						isSelected: false,
					},
				};
			});
		});
	};

	return (
		<div className="App">
			{stars.map((star, index) => (
				<Star
					key={star.id}
					index={index + 1}
					onMouseMove={onMouseMove}
					star={star}
					onMouseOut={onMouseOut}
					onClick={onClick}
				/>
			))}
		</div>
	);
}

export default App;
