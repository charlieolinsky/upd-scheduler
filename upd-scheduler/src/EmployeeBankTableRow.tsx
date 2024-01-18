import { useState } from "react";
import EmployeeBankCount from "./EmlpoyeeBankCount";
import EmployeeBankName from "./EmployeeBankName";

interface EmployeeBankTableRowProps {
  id: number;
  removeEmployee: (idToRemove: number) => void;
  handleSelectEmployee: (name: string) => void;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  id,
  removeEmployee,
  handleSelectEmployee,
}) => {
  const [name, setName] = useState("Err");

  return (
    <div className="employee-bank-table-row">
      <div
        className="employee-bank-name"
        onClick={() => handleSelectEmployee(name)}
      >
        <EmployeeBankName setName={setName} />
      </div>
      <div className="employee-bank-count">
        <EmployeeBankCount />
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button" onClick={() => removeEmployee(id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default EmployeeBankTableRow;
