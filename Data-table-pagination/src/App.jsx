import DataTable from "./DataTable";

export default function App() {
	const sampleData = [
		{ id: 1, name: "Alice", age: 25 },
		{ id: 2, name: "Bob", age: 30 },
		{ id: 3, name: "Charlie", age: 22 },
		{ id: 4, name: "David", age: 28 },
		{ id: 5, name: "Eve", age: 27 },
		{ id: 6, name: "Frank", age: 33 },
		{ id: 7, name: "Grace", age: 24 },
		{ id: 8, name: "Hank", age: 26 },
		{ id: 9, name: "Ivy", age: 21 },
		{ id: 10, name: "Jack", age: 29 },
		{ id: 11, name: "Kathy", age: 31 },
		{ id: 12, name: "Leo", age: 23 },
		{ id: 13, name: "Mia", age: 32 },
		{ id: 14, name: "Nina", age: 34 },
		{ id: 15, name: "Oscar", age: 35 },
		{ id: 16, name: "Paul", age: 36 },
		{ id: 17, name: "Quinn", age: 37 },
		{ id: 18, name: "Rita", age: 38 },
		{ id: 19, name: "Sam", age: 39 },
		{ id: 20, name: "Tina", age: 40 },
	];

	return <DataTable data={sampleData} />;
}
