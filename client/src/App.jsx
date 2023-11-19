import { useState, useEffect } from "react";

import List from "./components/List";
import useApi from "./hooks/useApi";

function App() {
	const { data, loading, error, fetchData, postData, putData, deleteData } = useApi("buildings");

	let renderd = data ? <List data={data} /> : <div>Loading...</div>;

	async function handleDelete() {
		await deleteData(1);
		await fetchData();
	}

	return (
		<div className="container">
			<button onClick={handleDelete}>Delete</button>
			<div>{renderd}</div>
		</div>
	);
}

export default App;
