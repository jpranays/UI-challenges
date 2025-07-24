import React from "react";

function Tree({ tree, handleDelete }) {
	return Object.keys(tree).length > 0 ? (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
				<h4
					style={{
						cursor: "pointer",
					}}
				>
					{tree.name}
				</h4>
				<button onClick={() => handleDelete(tree.id)}>Delete</button>
			</div>
			{tree.isFolder && tree.children && (
				<div
					style={{
						paddingLeft: "20px",
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
				>
					{tree.children.map((child) => (
						<span key={child.id}>
							<Tree tree={child} handleDelete={handleDelete} />
						</span>
					))}
				</div>
			)}
		</div>
	) : null;
}

export default Tree;
