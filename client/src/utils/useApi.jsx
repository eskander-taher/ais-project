import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url) => {
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
			// Assuming successful deletion, you may want to handle this differently based on your API behavior
			setData((prevData) => prevData.filter((user) => user.id !== id));
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
  };

  useEffect(() => {
		fetchData();
  }, []);

  return { data, error, loading, fetchData, postData, putData, deleteData };
};

export default useApi;
