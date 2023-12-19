import React, { useState, useEffect } from "react";
import AddItemModal from "../../components/AddItemModal";
import useApi from "../../utils/useApi";
import { USERS_API_URL } from "../../utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import List from "../../components/List";

export default function Users() {
	const { data, error, loading, postData, deleteData } = useApi(USERS_API_URL);

	const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);
	const [confirmDelete, setConfirmDelete] = useState(null);

	const handleAddItemClick = () => {
		setAddItemModalOpen(true);
	};

	const handleCloseModal = () => {
		setAddItemModalOpen(false);
	};

	const handleAddItem = (userData) => {
		// Validate input and then add the user
		if (userData.name.trim()) {
			postData(userData);
			handleCloseModal();
			toast.success("User was added successfuly");
		}
	};

	const handleDeleteItem = (userId) => {
		// Show confirmation dialog before deletion
		setConfirmDelete(userId);
	};

	const confirmDeleteAction = () => {
		// Actual deletion after confirmation
		deleteData(confirmDelete);
		setConfirmDelete(null);
	};

	const cancelDeleteAction = () => {
		// Cancel deletion
		setConfirmDelete(null);
	};

	return (
		<div>
			<button className="add-button" onClick={handleAddItemClick}>
				{loading ? "Loading..." : "Add User"}
			</button>
			<AddItemModal
				isOpen={isAddItemModalOpen}
				onClose={handleCloseModal}
				onAddItem={handleAddItem}
				inputPlaceholder="User Name"
				inputLabel="Enter User Name:"
			/>
			<ToastContainer />
			{error && <p>Error: {error.message}</p>}
			<List
				data={data}
				loading={loading}
				error={error}
				onDeleteItem={handleDeleteItem}
				route="users"
			/>
			{confirmDelete && (
				<div className="confirmation-dialog">
					<p>Are you sure you want to delete this user?</p>
					<button className="delete-btn" onClick={confirmDeleteAction}>
						Yes
					</button>
					<button onClick={cancelDeleteAction}>No</button>
				</div>
			)}
		</div>
	);
}
