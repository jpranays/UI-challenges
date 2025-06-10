import { useState } from "react";
import "./App.css";
import Comment from "./Comment";
import { AnimatePresence } from "framer-motion";

function App() {
	const [comments, setComments] = useState([]);

	function getRandomUniqueId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function handleCommentChange(id, text) {
		setComments((prevComments) =>
			prevComments.map((comment) =>
				comment.id === id ? { ...comment, text: text } : comment
			)
		);
	}

	function addComment(id = null) {
		const newComment = {
			id: getRandomUniqueId(),
			text: "",
			parentId: id,
		};
		setComments((prevComments) => [...prevComments, newComment]);
	}
	function deleteComment(id) {
		setComments((prevComments) =>
			prevComments.filter(
				(comment) => comment.id !== id && comment.parentId !== id
			)
		);
	}

	return (
		<div className="App">
			<button
				onClick={() => {
					addComment();
				}}
			>
				Add comment
			</button>
			<div className="comments-container">
				<AnimatePresence>
					{comments
						.filter((comment) => !comment.parentId)
						.map((comment) => (
							<Comment
								key={comment.id}
								comment={comment}
								addComment={addComment}
								deleteComment={deleteComment}
								handleCommentChange={handleCommentChange}
								comments={comments}
							/>
						))}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default App;
