import { useEffect, useState } from "react";
import EmployeeBankCount from "./EmlpoyeeBankCount";
import EmployeeBankName from "./EmployeeBankName";

interface EmployeeBankTableRowProps {
  id: number;
  employeeName: string;
  handleRemoveEmployee: (idToRemove: number) => void;
  handleSelectEmployee: (name: string) => void;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  id,
  employeeName,
  handleRemoveEmployee,
  handleSelectEmployee,
}) => {
  return (
    <div className="employee-bank-table-row">
      <div
        className="employee-bank-name"
        onClick={() => handleSelectEmployee(employeeName)}
      >
        <EmployeeBankName employeeName={employeeName} />
      </div>
      <div className="employee-bank-count">
        <EmployeeBankCount />
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button" onClick={() => handleRemoveEmployee(id)}>
          X
        </button>
      </div>
    </div>
  );
};
export default EmployeeBankTableRow;
