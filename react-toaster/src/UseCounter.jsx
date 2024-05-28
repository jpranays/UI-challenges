import React from "react";

function UseCounter() {
	const [count, setCount] = React.useState(0);
	return [count, setCount];
}

export default UseCounter;
