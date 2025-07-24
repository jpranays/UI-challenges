import { useEffect, useState } from "react";
import "./App.css";
import Tree from "./Tree";

const CHECKBOX = {
	id: 1,
	isChecked: false,
	children: [
		{
			id: 2,
			isChecked: false,
		},
		{
			id: 3,
			isChecked: false,
			children: [
				{
					id: 4,
					isChecked: false,
				},
				{ id: 5, isChecked: false },
			],
		},
		{
			id: 6,
			isChecked: false,
		},
		{
			id: 7,
			isChecked: false,
			children: [
				{
					id: 8,
					isChecked: false,
				},
			],
		},
	],
};

function App() {
	const [checkboxTree, setCheckboxTree] = useState(CHECKBOX);
	function handleCheck(id, e) {
		findAndSet(checkboxTree, id, e.target.checked === true ? true : false);
		setCheckboxTree({ ...checkboxTree });
		checkParent(checkboxTree, e.target.checked);
		setCheckboxTree({ ...checkboxTree });
	}
	function findAndSet(tree, id, value) {
		if (tree.id === id) {
			tree.isChecked = value;
			if (tree?.children?.length > 0) {
				tree?.children?.forEach((child) => {
					findAndSet(child, child.id, value);
				});
			}
			return;
		} else {
			tree?.children?.forEach((child) => {
				findAndSet(child, id, value);
			});
		}
	}
	function checkParent(tree, value) {
		tree.children.forEach((child) => {
			if (child?.children?.length > 0) {
				return checkParent(child, true);
			} else {
				value &&= child.isChecked;
			}
		});
		tree.isChecked = value;
	}

	return <Tree tree={checkboxTree} handleCheck={handleCheck} />;
}

export default App;
