import React from "react";
import { FaRegStar } from "react-icons/fa";
import { LuStarHalf } from "react-icons/lu";

function Star({ index, onMouseMove, star, onMouseOut, onClick }) {
	return (
		<div
			className="star-container"
			data-index={index}
			onMouseMove={onMouseMove}
			onMouseOut={onMouseOut}
			onClick={onClick}
		>
			<LuStarHalf
				className="star-icon"
				size={window.innerWidth < 600 ? 52 : 104}
				fill={star.first.isHovered || star.first.isSelected ? "gold" : "black"}
				style={{
					transition: "color 0.2s ease",
				}}
				stroke="transparent"
			/>
			<LuStarHalf
				className="star-icon"
				size={window.innerWidth < 600 ? 52 : 104}
				fill={
					star.second.isHovered || star.second.isSelected ? "gold" : "black"
				}
				stroke="transparent"
				style={{
					transition: "fill 0.2s ease",
					position: "absolute",
					right: "1px",
					top: "0",
					transform: "rotateY(180deg) translateX(100%)",
					transformOrigin: "right",
				}}
			/>
		</div>
	);
}

export default Star;
