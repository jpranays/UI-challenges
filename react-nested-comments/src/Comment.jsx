import React from "react";
import { AnimatePresence, motion } from "framer-motion";
function Comment({
	comment,
	addComment,
	deleteComment,
	handleCommentChange,
	comments,
}) {
	return (
		<>
			<motion.div
				key={comment.id}
				className="comment"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.2 }}
			>
				<textarea
					value={comment.text}
					onChange={(e) => {
						handleCommentChange(comment.id, e.target.value);
					}}
					className="comment-input"
					cols={3}
					rows={3}
					placeholder="Write a comment..."
				/>
				<div className="buttons-container">
					<button
						className="primary"
						onClick={() => {
							addComment(comment.id);
						}}
					>
						Reply
					</button>
					<button
						className="secondary"
						onClick={() => {
							deleteComment(comment.id);
						}}
					>
						Delete
					</button>
				</div>
			</motion.div>
			<div className="child-comments">
				<AnimatePresence>
					{comments
						.filter((cmnt) => comment.id === cmnt.parentId)
						.map((childComment) => (
							<Comment
								key={childComment.id}
								comment={childComment}
								addComment={addComment}
								deleteComment={deleteComment}
								handleCommentChange={handleCommentChange}
								comments={comments}
							/>
						))}
				</AnimatePresence>
			</div>
		</>
	);
}
export default Comment;
