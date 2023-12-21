import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api";
// const BASE_URL = "http://134.122.104.19:5000/api";

const useApi = (url) => {
	url = BASE_URL + url;
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		try {
			setLoading(true);
			const response = await axios.get(url);
			setData(response.data.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const postData = async (newData) => {
		try {
			setLoading(true);
			const response = await axios.post(url, newData);
			setData((prev) => {
				return [response.data.data, ...prev];
			});
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const putData = async (id, updatedData) => {
		try {
			setLoading(true);
			const response = await axios.put(`${url}/${id}`, updatedData);
			setData(response.data.data);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const deleteData = async (id) => {
		try {
			setLoading(true);
			await axios.delete(`${url}/${id}`);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const addBuilding = async (id) => {
		try {
			setLoading(true);
			await axios.post(`${url}/${id}`);
			await fetchData();
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { data, setData, error, loading, fetchData, postData, putData, deleteData, addBuilding };
};

export default useApi;
