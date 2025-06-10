import React, { useEffect, useRef, useState } from "react";
import "./OTPInput.style.css";
function OTPInput({ length = 4 }) {
	const [otpInput, setOtpInput] = useState(
		new Array(length).fill("").map((_a, index) => {
			return { id: index, value: "" };
		})
	);
	const otpInputRefs = useRef(
		new Array(length).fill(null).map((item) => {
			return {
				ref: useRef(),
			};
		})
	);

	useEffect(() => {
		if (otpInput.every((item) => item.value !== "")) {
			otpInputRefs.current.forEach((item) => {
				item.ref.current.blur();
			});
		}
	}, [otpInput]);

	return (
		<div className="otp-input-container">
			{otpInput.map((input, index) => {
				return (
					<input
						className="otp-input"
						key={input.id}
						value={input.value}
						ref={otpInputRefs.current[index]?.ref}
						autoFocus={index === 0}
						onChange={(e) => {
							setOtpInput((prev) => {
								let value = e.target.value;
								if (value) {
									if (input.value) {
										otpInputRefs.current[index].ref.current.focus();
										return prev;
									}
									for (let i = 0; i + index < length && i < value.length; i++) {
										prev.splice(index + i, 1, {
											id: index + i,
											value: value[i],
										});

										if (i + index + 1 < length) {
											otpInputRefs.current[i + index + 1].ref.current.focus();
										} else if (!otpInputRefs.current[0].ref.current.value) {
											otpInputRefs.current[0].ref.current.focus();
										}
									}
								} else {
									prev.splice(index, 1, {
										id: index,
										value: "",
									});
								}

								return [...prev];
							});
						}}
						onKeyDown={(e) => {
							switch (e.key) {
								case "ArrowLeft":
									if (index > 0) {
										otpInputRefs.current[index - 1].ref.current.focus();
									}
									break;
								case "ArrowRight":
									if (index < length - 1) {
										otpInputRefs.current[index + 1].ref.current.focus();
									}
									break;
								case "Backspace":
									if (!e.target.value) {
										if (index > 0) {
											otpInputRefs.current[index - 1].ref.current.focus();
										} else {
											otpInputRefs.current[length - 1].ref.current.focus();
										}
									}
							}
						}}
					/>
				);
			})}
		</div>
	);
}

export default OTPInput;
