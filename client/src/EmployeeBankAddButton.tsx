import { FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles/EmployeeBank.css";

interface EmployeeBankAddButtonProps {
  onSave: (name: string) => void; // Function to save the name
}

const EmployeeBankAddButton: React.FC<EmployeeBankAddButtonProps> = ({
  onSave,
}) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave(name); // Pass the name back to the parent component
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="employee-bank-table-row" id="modal-row">
        <div className="employee-bank-name">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Employee Name"
          />
        </div>

        <div className="employee-bank-btn" id="save-btn">
          <button type="submit">
            <FontAwesomeIcon className="fa-plus-icon" icon={faPlus} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default EmployeeBankAddButton;
