import { useState } from "react";

interface ModalProps {
  isOpen: boolean; // Whether the modal is open or not
  onClose: () => void; // Function to close the modal
  onSave: (name: string) => void; // Function to save the name
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSave(name); // Pass the name back to the parent component
  };

  const resetInput = () => {
    setName("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Employee Name"
        />
        <button
          onClick={() => {
            handleSubmit();
            resetInput();
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            onClose();
            resetInput();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
