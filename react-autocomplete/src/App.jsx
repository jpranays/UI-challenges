import { useEffect, useRef, useState } from "react";
import "./App.scss";
const ALLSUGGESTIONS = [
	"New York",
	"Los Angeles",
	"Chicago",
	"Houston",
	"Phoenix",
	"Philadelphia",
	"San Antonio",
	"San Diego",
	"Dallas",
	"San Jose",
];
function App() {
	const [inputValue, setInputValue] = useState("");

	const [showSuggestions, setShowSuggestions] = useState(false);

	const [suggestions, setSuggestions] = useState([]);

	function handleSuggestions() {
		setSuggestions(
			ALLSUGGESTIONS.filter((item) =>
				item.toLowerCase().includes(inputValue.toLowerCase())
			)
		);
	}

	useEffect(() => {
		debounce(handleSuggestions, 0)();
	}, [inputValue]);

	const wrapperRef = useRef();
	useEffect(() => {
		const handler = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setShowSuggestions(false);
			}
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);

	function debounce(fn, time = 200) {
		let timer = null;
		return function (...args) {
			clearTimeout(timer);
			timer = setTimeout(() => {
				fn(...args);
			}, time);
		};
	}

	return (
		<div className="autocomplete-container" ref={wrapperRef}>
			<div className="autocomplete-input-container">
				<input
					type="text"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					onFocus={() => {
						setShowSuggestions(true);
					}}
					className="autocomplete-input"
					placeholder="Start typing..."
				/>
			</div>
			<div className="suggestions-container">
				{showSuggestions && inputValue.length > 0 ? (
					suggestions.length > 0 ? (
						suggestions.map((suggestion) => {
							return (
								<div
									className="suggestion"
									key={suggestion}
									onClick={() => {
										setInputValue(suggestion);
										setShowSuggestions(false);
									}}
								>
									{suggestion}
								</div>
							);
						})
					) : (
						<p>No suggestion found</p>
					)
				) : null}
			</div>
		</div>
	);
}

export default App;
