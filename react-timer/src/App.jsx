import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
	const [date, setDate] = useState(
		new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
	);

	const timerRef = useRef(null);

	const [displayTime, setDisplayTime] = useState(calculateTimeLeft());

	function calculateTimeLeft() {
		const Now = Date.now();
		const seconds = Math.floor((date.getTime() - Now) / 1000);
		const minutes = Math.floor(seconds / 60);
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		console.log(
			`${days} Days, ${hours % 24} Hours, ${minutes % 60} Minutes, ${
				seconds % 60
			} Seconds`
		);
		if (seconds < 0) {
			clearInterval(timerRef?.current);
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}
		return {
			days: days,
			hours: hours % 24,
			minutes: minutes % 60,
			seconds: seconds % 60,
		};
	}

	useEffect(() => {
		timerRef.current = setInterval(() => {
			setDisplayTime(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timerRef.current);
	}, [date]);

	return (
		<>
			<div className="App">
				<div className="future-date-container">
					<span>Wait till</span>
					<input
						type="datetime-local"
						name=""
						value={
							date.toISOString().split("T")[0] +
							"T" +
							date.toTimeString().split(" ")[0]
						}
						onChange={(e) => {
							if (e.target.value) {
								setDate(new Date(e.target.value));
							} else {
								setDate(new Date(new Date().getTime() + 1000 * 60 * 60 * 24));
							}
						}}
						// min={
						// 	new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
						// 		.toISOString()
						// 		.split("T")[0]
						// }
						format="YYYY-MM-DDTHH:mm"
						placeholder="Select a date and time"
					/>
				</div>
			</div>

			<div className="display-time-container">
				<div className="display-time">
					<div className="block">
						<span className="time">{displayTime.days}</span>
						<span className="label">Days</span>
					</div>
					<div className="block">
						<span className="time">{displayTime.hours}</span>
						<span className="label">Hours</span>
					</div>
					<div className="block">
						<span className="time">{displayTime.minutes}</span>
						<span className="label">Minutes</span>
					</div>
					<div className="block">
						<span className="time">{displayTime.seconds}</span>
						<span className="label">Seconds</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
