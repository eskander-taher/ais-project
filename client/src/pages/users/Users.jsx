import { useState, useEffect } from "react";
// import UserList from "./UserList";
import AddItemModal from "../../components/AddItemModal";
import useApi from "../../utils/useApi";
import { USERS_API_URL } from "../../utils/constants";

function UserList({ data, loading, error, onDeleteItem }) {
	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error: {error.message}</p>;
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th>User ID</th>
					<th>User Name</th>
					<th>CreatedAt</th>
				</tr>
			</thead>
			<tbody>
				{data.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.createdAt}</td>
						<td>
							<button className="delete-btn" onClick={() => onDeleteItem(user.id)}>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default function Users() {
	const { data, error, loading, postData, deleteData, putData } = useApi(USERS_API_URL);

	const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);

	const handleAddItemClick = () => {
		setAddItemModalOpen(true);
	};

	const handleCloseModal = () => {
		setAddItemModalOpen(false);
	};

	const handleAddItem = (itemData) => {
		postData(itemData);
		handleCloseModal();
	};

	const handleDeleteItem = (userId) => {
		// Call the deleteData function with the user ID to delete
		deleteData(userId);
	};

	useEffect(() => {
		// You may want to refetch data after a successful deletion
		// to update the user list
	}, [data]);

	console.log(data);

	return (
		<div>
			<button className="add-button" onClick={handleAddItemClick}>
				Add user
			</button>
			<AddItemModal
				isOpen={isAddItemModalOpen}
				onClose={handleCloseModal}
				onAddItem={handleAddItem}
			/>
			<UserList
				data={data}
				loading={loading}
				error={error}
				onDeleteItem={handleDeleteItem} // Pass the delete function to UserList
			/>
		</div>
	);
}
