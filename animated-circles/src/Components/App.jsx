import React, { useMemo, useState } from "react";
import "./App.scss";
import { AnimatePresence, motion } from "framer-motion";
function App() {
	const [circles, setCircles] = useState([]);

	const isUndoDisabled = useMemo(() => {
		return circles.length === 0 || circles.every((circle) => !circle.visible);
	}, [circles]);

	const isRedoDisabled = useMemo(() => {
		return circles.length === 0 || circles.every((circle) => circle.visible);
	}, [circles]);

	const isClearDisabled = useMemo(() => {
		return circles.length === 0;
	}, [circles]);

	const handleCreateCircle = (e) => {
		setCircles([
			...circles,
			{
				id: Math.random(),
				x: e.clientX-15,
				y: e.clientY-15,
				color: `rgb(${Math.random() * 255},${Math.random() * 255},${
					Math.random() * 255
				})`,
				visible: true,
			},
		]);
	};
	const handleUndoClick = () => {
		const lastVisibleCircle = circles.findLast((circle) => circle.visible);
		setCircles(
			circles.map((circle) =>
				circle.id === lastVisibleCircle.id
					? { ...circle, visible: false }
					: circle
			)
		);
	};
	const handleRedoClick = () => {
		const firstInvisibleCircle = circles.find((circle) => !circle.visible);
		setCircles(
			circles.map((circle) =>
				circle.id === firstInvisibleCircle.id
					? { ...circle, visible: true }
					: circle
			)
		);
	};
	const handleClearClick = () => {
		setCircles([]);
	};
	return (
		<div className="container">
			<div className="btn-container">
				<button
					className="btn undo"
					disabled={isUndoDisabled}
					onClick={handleUndoClick}
				>
					Undo
				</button>
				<button
					className="btn redo"
					disabled={isRedoDisabled}
					onClick={handleRedoClick}
				>
					Redo
				</button>
				<button
					className="btn clear"
					onClick={handleClearClick}
					disabled={isClearDisabled}
				>
					Clear
				</button>
			</div>
			<div className="circles-container" onClick={handleCreateCircle}>
				<AnimatePresence>
					{circles.map((circle) =>
						circle.visible ? (
							<motion.div
								key={circle.id}
								className="circle"
								style={{
									backgroundColor: circle.color,
									left: circle.x,
									top: circle.y,
								}}
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0 }}
							></motion.div>
						) : null
					)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
