import { useState } from "react";
import "./App.css";
import Reader from "./Reader";

function App() {
	const [files, setFiles] = useState([
		{
			id: "folder-1",
			type: "folder",
			name: "Folder-1",
			parentId: null,
		},
		{
			id: "folder-2",
			type: "folder",
			name: "Folder-2",
			parentId: null,
		},
		{
			id: "file-1",
			type: "file",
			name: "File-1",
			parentId: null,
		},
		{
			id: "folder-1-1",
			type: "folder",
			name: "Folder-1-1",
			parentId: "folder-1",
		},
		{
			id: "file-1-1",
			type: "file",
			name: "File-1-1",
			parentId: "folder-1",
		},
		{
			id: "file-1-2",
			type: "file",
			name: "File-1-2",
			parentId: "folder-1",
		},
		{
			id: "file-1-1-1",
			type: "file",
			name: "File-1-1-1",
			parentId: "folder-1-1",
		},
		{
			id: "file-1-1-2",
			type: "file",
			name: "File-1-1-2",
			parentId: "folder-1-1",
		},
		{
			id: "folder-2-1",
			type: "folder",
			name: "Folder-2-1",
			parentId: "folder-2",
		},
		{
			id: "file-2-1",
			type: "file",
			name: "File-2-1",
			parentId: "folder-2",
		},
		{
			id: "file-2-2",
			type: "file",
			name: "File-2-2",
			parentId: "folder-2",
		},
	]);

	const [currentActiveFile, setCurrentActiveFile] = useState("");

	const generateRandomId = () =>
		(Math.random() * 0.5).toString(16).substring(2);
	const addFolder = (parentId) => {
		const folderId = generateRandomId();

		setFiles((files) => {
			return [
				...files,
				{
					id: folderId,
					type: "folder",
					name: "",
					children: [],
					parentId: parentId,
				},
			];
		});

		setCurrentActiveFile(folderId);
	};
	const addFile = (parentId) => {
		const folderId = generateRandomId();

		setFiles((files) => {
			return [
				...files,
				{
					id: folderId,
					type: "file",
					name: "",
					parentId: parentId,
				},
			];
		});

		setCurrentActiveFile(folderId);
	};

	function deleteFile(targetId, data = files) {
		const idsToDelete = new Set();

		const collectDescendants = (id) => {
			idsToDelete.add(id);
			data.forEach((item) => {
				if (item.parentId === id) {
					collectDescendants(item.id);
				}
			});
		};

		collectDescendants(targetId);

		setFiles(data.filter((item) => !idsToDelete.has(item.id)));
	}

	return (
		<div className="App">
			{files.length > 0 ? (
				files
					.filter((file) => !file.parentId)
					.map((file) => {
						return (
							<Reader
								file={file}
								key={file.id}
								addFolder={addFolder}
								addFile={addFile}
								setFiles={setFiles}
								files={files}
								currentActiveFile={currentActiveFile}
								setCurrentActiveFile={setCurrentActiveFile}
								deleteFile={deleteFile}
							/>
						);
					})
			) : (
				<div>
					<span
						style={{
							cursor: "default",
						}}
						onClick={() => {
							addFolder();
						}}
					>
						📁
					</span>
					<span
						style={{
							cursor: "default",
						}}
						onClick={() => {
							addFile();
						}}
					>
						📄
					</span>
				</div>
			)}
		</div>
	);
}

export default App;
