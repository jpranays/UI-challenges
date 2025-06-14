import React, { useState } from "react";

function Reader({
	file,
	addFolder,
	setCurrentActiveFile,
	currentActiveFile,
	files,
	setFiles,
	addFile,
	deleteFile,
}) {
	const [isExpanded, setIsExpanded] = useState(false);
	const [fileName, setFileName] = useState(file.name);
	return (
		<div>
			{file.type === "folder" ? (
				<div>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 20,
						}}
					>
						{currentActiveFile === file.id ? (
							<input
								autoFocus
								value={fileName}
								placeholder="Enter folder name"
								onChange={(e) => {
									setFileName(e.target.value.trim());
								}}
								onBlur={(e) => {
									if (!file.name && !fileName) {
										setFiles((prev) => {
											return prev.filter((item) => {
												if (item.id !== currentActiveFile) {
													return true;
												}
												return false;
											});
										});
									} else {
										setFiles((prev) => {
											return prev.map((item) => {
												if (item.id === currentActiveFile) {
													return {
														...item,
														name: fileName || file.name,
													};
												}
												return item;
											});
										});
									}
									setCurrentActiveFile(null);
								}}
							/>
						) : (
							<div
								style={{
									fontWeight: "bold",
									cursor: "pointer",
								}}
								onClick={() => {
									setIsExpanded((prev) => !prev);
								}}
							>
								{file.name}
							</div>
						)}
						{currentActiveFile !== file.id && (
							<div
								style={{
									display: "flex",
									alignItems: "center",
								}}
							>
								<span
									style={{
										cursor: "default",
									}}
									onClick={() => {
										addFolder(file.id);
										setIsExpanded(true);
									}}
								>
									📁
								</span>
								<span
									style={{
										cursor: "default",
									}}
									onClick={() => {
										addFile(file.id);
										setIsExpanded(true);
									}}
								>
									📄
								</span>
								<span
									style={{
										cursor: "default",
									}}
									onClick={() => {
										setCurrentActiveFile(file.id);
										setFileName(file.name);
									}}
								>
									✏️
								</span>
								<span
									style={{
										cursor: "default",
									}}
									onClick={() => {
										deleteFile(file.id);
									}}
								>
									🗑️
								</span>
							</div>
						)}
					</div>
					{isExpanded && (
						<div
							style={{
								paddingLeft: 20,
							}}
						>
							{files.filter((item) => item.parentId === file.id).length > 0 ? (
								files
									.filter((item) => item.parentId === file.id)
									.map((child) => {
										return (
											<Reader
												file={child}
												key={child.id}
												addFolder={addFolder}
												currentActiveFile={currentActiveFile}
												files={files}
												setCurrentActiveFile={setCurrentActiveFile}
												setFiles={setFiles}
												addFile={addFile}
												deleteFile={deleteFile}
											/>
										);
									})
							) : (
								<span
									style={{
										fontSize: 12,
										color: "#ccc",
									}}
								>
									--Empty folder--
								</span>
							)}
						</div>
					)}
				</div>
			) : currentActiveFile === file.id ? (
				<input
					autoFocus
					value={fileName}
					placeholder="Enter file name"
					onChange={(e) => {
						setFileName(e.target.value.trim());
					}}
					onBlur={(e) => {
						if (!file.name && !fileName) {
							setFiles((prev) => {
								return prev.filter((item) => {
									if (item.id !== currentActiveFile) {
										return true;
									}
									return false;
								});
							});
						} else {
							setFiles((prev) => {
								return prev.map((item) => {
									if (item.id === currentActiveFile) {
										return {
											...item,
											name: fileName || file.name,
										};
									}
									return item;
								});
							});
						}
						setCurrentActiveFile(null);
					}}
				/>
			) : (
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 20,
					}}
				>
					<div
						onClick={() => {
							setCurrentActiveFile(file.id);
							setFileName(file.name);
						}}
					>
						{" "}
						{file.name}
					</div>
					{currentActiveFile !== file.id && (
						<div
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<span
								style={{
									cursor: "default",
								}}
								onClick={() => {
									setCurrentActiveFile(file.id);
									setFileName(file.name);
								}}
							>
								✏️
							</span>
							<span
								style={{
									cursor: "default",
								}}
								onClick={() => {
									deleteFile(file.id);
								}}
							>
								🗑️
							</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default Reader;
