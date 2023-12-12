import React from "react";
import { useState, useEffect } from "react";
import AddItemModal from "../../components/AddItemModal";
import useApi from "../../utils/useApi";
import { BUILDINGS_API_URL } from "../../utils/constants";

function BuildingList({ data, loading, error, onDeleteItem }) {
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
          <th>Building ID</th>
          <th>Building Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((building) => (
          <tr key={building.id}>
            <td>{building.id}</td>
            <td>{building.name}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => onDeleteItem(building.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Buildings() {
  const { data, error, loading, postData, deleteData } = useApi(BUILDINGS_API_URL);

  const [isAddItemModalOpen, setAddItemModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleAddItemClick = () => {
    setAddItemModalOpen(true);
  };

  const handleCloseModal = () => {
    setAddItemModalOpen(false);
  };

  const handleAddItem = (buildingData) => {
    // Validate input and then add the building
    if (buildingData.name.trim()) {
      postData(buildingData);
      handleCloseModal();
    }
  };

  const handleDeleteItem = (buildingId) => {
    // Show confirmation dialog before deletion
    setConfirmDelete(buildingId);
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
        {loading ? "Loading..." : "Add Building"}
      </button>
      <AddItemModal
        isOpen={isAddItemModalOpen}
        onClose={handleCloseModal}
        onAddItem={handleAddItem}
        inputPlaceholder="Building Name"
        inputLabel="Enter Building Name:"
      />
      {error && <p>Error: {error.message}</p>}
      <BuildingList
        data={data}
        loading={loading}
        error={error}
        onDeleteItem={handleDeleteItem}
      />
      {confirmDelete && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this building?</p>
          <button className="delete-btn" onClick={confirmDeleteAction}>Yes</button>
          <button onClick={cancelDeleteAction}>No</button>
        </div>
      )}
    </div>
  );
}
