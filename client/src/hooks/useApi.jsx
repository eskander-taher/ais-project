// Import necessary dependencies
import { useState, useEffect } from "react";
import axios from "axios";

let API_BASE_URL = "http://localhost:5000/api/";

// Define the useApi hook
const useApi = (source, initialData = null) => {
	let initialUrl = API_BASE_URL + source;
	// State variables
	const [data, setData] = useState(initialData);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// Function to perform HTTP request
	const fetchData = async (url) => {
		try {
			setLoading(true);
			const response = await axios.get(url);
			setData(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	// useEffect to fetch data when the component mounts or when the URL changes
	useEffect(() => {
		if (initialUrl) {
			fetchData(initialUrl);
		}
	}, [initialUrl]);

	// Function to handle POST request
	const postData = async (url, newData) => {
		try {
			setLoading(true);
			const response = await axios.post(url, newData);
			setData(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	// Function to handle PUT request
	const putData = async (url, updatedData) => {
		try {
			setLoading(true);
			const response = await axios.put(url, updatedData);
			setData(response.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	// Function to handle DELETE request
	const deleteData = async (id) => {
		let url = initialUrl + "/" + id;
		try {
			setLoading(true);
			await axios.delete(url);
			setData(null); // Assuming a successful deletion means empty data
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	// Return the state variables and functions
	return { data, loading, error, fetchData, postData, putData, deleteData };
};

export default useApi;
