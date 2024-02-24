import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import "./styles/EmployeeBank.css";

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
    <div className="modal-main">
      <div className="employee-bank-table-row">
        <div className="employee-bank-name">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Employee Name"
          />
        </div>

        <div className="employee-bank-save-btn">
          <button
            onClick={() => {
              handleSubmit();
              resetInput();
            }}
          >
            <FontAwesomeIcon className="fa-check-icon" icon={faCheck} />
          </button>
        </div>
        <div className="employee-bank-remove-btn">
          <button
            onClick={() => {
              onClose();
              resetInput();
            }}
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
