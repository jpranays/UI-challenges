import { useState } from "react";
import "./App.css";
import Tree from "./Tree";

const filesTree = {
	id: "root",
	name: "Root",
	isFolder: true,
	children: [
		{
			id: "1",
			name: "Folder 1",
			isFolder: true,
			children: [
				{ id: "1-1", name: "File 1-1", isFolder: false },
				{ id: "1-2", name: "File 1-2", isFolder: false },
			],
		},
		{
			id: "2",
			name: "Folder 2",
			isFolder: true,
			children: [
				{ id: "2-1", name: "File 2-1", isFolder: false },
				{ id: "2-2", name: "File 2-2", isFolder: false },
			],
		},
		{
			id: "3",
			name: "Folder 3",
			isFolder: true,
			children: [
				{ id: "3-1", name: "File 3-1", isFolder: false },
				{ id: "3-2", name: "File 3-2", isFolder: false },
			],
		},
	],
};
function App() {
	const [tree, setTree] = useState(filesTree);

	function handleDelete(id) {
		if (id === "root") {
			return setTree({});
		}
		findAndDelete(tree, tree.children, id);
		setTree({ ...tree });
	}
	function findAndDelete(tree, arr, id) {
		if (tree.id === id) {
			arr.splice(
				arr.findIndex((item) => item.id === tree.id),
				1
			);
		} else if (tree?.children?.length > 0) {
			tree.children.forEach((child) => {
				findAndDelete(child, tree.children, id);
			});
		}
	}
	return (
		<div className="App">
			<Tree tree={tree} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
