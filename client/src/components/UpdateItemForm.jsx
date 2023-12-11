import React, { useState } from 'react';

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const [itemName, setItemName] = useState('');

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAddClick = () => {
    // Perform any validation or additional logic here
    if (itemName.trim() === '') {
      alert('Item name cannot be empty!');
      return;
    }

    // Call the onAddItem callback with the new item data
    onAddItem({
      name: itemName,
      // Add more properties as needed
    });

    // Clear the input field
    setItemName('');

    // Close the modal
    onClose();
  };

  return (
    <div className={`add-item-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Item</h2>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={handleInputChange}
        />
        <button onClick={handleAddClick}>Add Item</button>
      </div>
    </div>
  );
};

export default AddItemModal;
