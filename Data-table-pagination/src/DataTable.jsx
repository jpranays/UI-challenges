import { useState } from "react";
import "./style.css";
export default function DataTable({ data }) {
	const [pagination, setPagination] = useState({
		currentPage: 0,
		rowsPerPage: 5,
	});

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{data
						.slice(
							pagination.currentPage * pagination.rowsPerPage,
							pagination.rowsPerPage * (pagination.currentPage + 1)
						)
						.map(({ id, name, age }) => {
							return (
								<tr key={id}>
									<td>{id}</td>
									<td>{name}</td>
									<td>{age}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			<button
				onClick={() => {
					setPagination((prev) => {
						return {
							...prev,
							currentPage: prev.currentPage - 1,
						};
					});
				}}
				disabled={pagination.currentPage === 0}
			>
				Previous
			</button>
			<span>
				Showing records {pagination.currentPage * pagination.rowsPerPage + 1} -{" "}
				{pagination.rowsPerPage * (pagination.currentPage + 1) > data.length
					? data.length
					: pagination.rowsPerPage * (pagination.currentPage + 1)}{" "}
				of{" "}
			</span>
			<button
				onClick={() => {
					setPagination((prev) => {
						return {
							...prev,
							currentPage: prev.currentPage + 1,
						};
					});
				}}
				disabled={
					(pagination.currentPage + 1) * pagination.rowsPerPage >= data.length
				}
			>
				Next
			</button>

			<span>Rows per page:</span>
			<select
				onChange={(e) => {
					setPagination((prev) => {
						return {
							...prev,
							rowsPerPage: parseInt(e.target.value),
							currentPage: 0,
						};
					});
				}}
			>
				<option value="5">5</option>
				<option value="10">10</option>
				<option value="15">15</option>
			</select>
		</div>
	);
}
