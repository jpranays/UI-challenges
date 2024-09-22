import { useEffect, useState } from "react";

const COLORS = {
	Red: 10,
	Yellow: 5,
	Green: 15,
};
export default function App() {
	const [currentColor, setCurrentColor] = useState("Red");
	const [count, setCount] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setCount((prev) => prev + 1);
		}, 1000);
	}, []);

	useEffect(() => {
		if (count === COLORS[currentColor] && currentColor === "Green") {
			setCurrentColor("Red");
		} else if (count === COLORS[currentColor] && currentColor === "Red") {
			setCurrentColor("Yellow");
		} else if (count === COLORS[currentColor] && currentColor === "Yellow") {
			setCurrentColor("Green");
		}
	}, [count]);
	
  useEffect(() => {
		if (count === 0) return;
		setCount(0);
  }, [currentColor]);
  
	return (
		<div className="App">
			<div className="signal-container">
				{" "}
				{Object.keys(COLORS).map((key) => {
					return (
						<div
							className={
								key === currentColor ? `${key} signal active` : `${key} signal`
							}
							key={key}
							onClick={() => {
								setCurrentColor(key);
							}}
						>
							{key === currentColor ? COLORS[key] - count : null}{" "}
						</div>
					);
				})}{" "}
			</div>{" "}
		</div>
	);
}
