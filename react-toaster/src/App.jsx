import { useDispatch } from "react-redux";
import "./App.css";
import Toaster from "./Components/Toaster";
import { addToast } from "./redux/Toaster/actions";

function App() {
	const dispatch = useDispatch();
	return (
		<>
			<Toaster />
			<button
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
				onClick={() => {
					dispatch(
						addToast({
							message: "Hello",
							id: Math.random(),
						})
					);
				}}
			>
				Add Toast
			</button>
		</>
	);
}

export default App;
