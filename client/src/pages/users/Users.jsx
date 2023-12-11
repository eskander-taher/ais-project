import { useState } from "react";
import UserList from "./UserList";
import AddItemModal from "../../components/AddItemModal";

export default function Users() {
	const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);

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
