import React, { useCallback, useEffect } from "react";
import "./Toaster.css";
import { AnimatePresence, motion } from "framer-motion";
import Toast from "./Toast";
import { useDispatch, useSelector } from "react-redux";
import { removeToast } from "../redux/Toaster/actions";

function Toaster() {
	const { toastsList: toasts } = useSelector((state) => state.toastsData);
	const dispatch = useDispatch();
	const removeClickedToast = useCallback((id) => {
		return dispatch(removeToast({ id }));
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			if (toasts.length > 0) {
				removeClickedToast(toasts[0].id);
			}
		}, 2000);
		return () => clearTimeout(timer);
	}, [toasts]);
	return (
		<>
			<div className="toaster-list-container">
				<AnimatePresence>
					{toasts.map((toast) => (
						<Toast
							key={toast.id}
							toast={toast}
							removeToast={removeClickedToast}
						/>
					))}
				</AnimatePresence>
			</div>
		</>
	);
}

export default Toaster;
