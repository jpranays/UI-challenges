import React from "react";

function Tree({ tree, handleCheck }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 10,
			}}
		>
			<div
				style={{
					display: "flex",
					gap: 10,
				}}
			>
				<input
					type="checkbox"
					id={tree.id}
					checked={tree.isChecked}
					onChange={handleCheck.bind(null, tree.id)}
				/>
				<label htmlFor={`#${tree.id}`}>{tree.id}</label>
			</div>
			<div
				style={{
					paddingLeft: 20,
				}}
			>
				{tree?.children?.length > 0
					? tree.children.map((child) => {
							return (
								<Tree tree={child} key={child.id} handleCheck={handleCheck} />
							);
					  })
					: null}
			</div>
		</div>
	);
}

export default Tree;
