import { useState, useEffect } from "react";
import UserList from "./UserList";
import AddItemModal from "../../components/AddItemModal";
import useApi from "../../utils/useApi";

export default function Users() {
	const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);

	const { data, error, loading, fetchData, postData, putData, deleteData } = useApi("http://144.126.192.45/users");

	const handleAddItemClick = () => {
		setAddItemModalOpen(true);
	};

	const handleCloseModal = () => {
		setAddItemModalOpen(false);
	};

	const handleAddItem = (itemData) => {
		// Implement logic to add the item (e.g., make an API call)
		console.log("Adding item:", itemData);
		// Close the modal
		handleCloseModal();
	};

	console.log(data)
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
			<UserList />
		</div>
	);
}
