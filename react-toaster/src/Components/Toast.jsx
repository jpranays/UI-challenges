import { motion } from "framer-motion";
import { memo, useEffect } from "react";

function Toast({ toast, removeToast }) {

	return (
		<motion.div
			key={toast.id}
			className="toaster"
			animate={{
				opacity: 1,
				x: 0,
			}}
			exit={{
				opacity: 0,
				x: -300,
			}}
			transition={{
				duration: 0.3,
				type: "spring",
			}}
			initial={{
				opacity: 0,
				x: 300,
			}}
		>
			<button onClick={() => removeToast(toast.id)}> X </button>
			<div>
				{toast.message} + {toast.id}
			</div>
		</motion.div>
	);
}

export default memo(Toast);
