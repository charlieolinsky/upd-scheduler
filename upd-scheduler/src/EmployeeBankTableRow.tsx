import { useState } from "react";

interface EmployeeBankTableRowProps {
  rowId: number;
  employeeName: string;
  employeeCount: number;
  handleRemoveEmployee: (idToRemove: number) => void;
  handleSelectEmployee: (name: string, id: number) => void;
  isSelected: boolean;
}

const EmployeeBankTableRow: React.FC<EmployeeBankTableRowProps> = ({
  rowId,
  employeeName,
  employeeCount,
  handleRemoveEmployee,
  handleSelectEmployee,
  isSelected,
}) => {
  const style = {
    backgroundColor: isSelected ? "#fdff00" : "white",
    // color: isSelected ? "white" : "black",
    padding: "0px 5px 0px 5px",
  };

  return (
    <div className="employee-bank-table-row">
      <div
        className="employee-bank-name"
        onClick={() => handleSelectEmployee(employeeName, rowId)}
      >
        <h3 style={style}>{employeeName}</h3>
      </div>
      <div className="employee-bank-count">
        <h3>{employeeCount}</h3>
      </div>
      <div className="employee-bank-remove-btn">
        <button type="button" onClick={() => handleRemoveEmployee(rowId)}>
          X
        </button>
      </div>
    </div>
  );
};
export default EmployeeBankTableRow;
