import React, { useState } from "react";
import EmployeeBankTableRow from "./EmployeeBankTableRow";
import "./styles/EmployeeBank.css";

const EmployeeBank: React.FC = () => {
  const [employeeRows, setEmployeeRows] = useState<number[]>([]);

  const handleAddEmployee = () => {
    setEmployeeRows([...employeeRows, employeeRows.length]);
  };

  const handleRemoveEmployee = (index: number) => {
    setEmployeeRows(employeeRows.filter((_, idx) => idx !== index));
  };

  return (
    <div className="employee-bank-main">
      <div className="employee-bank-header">
        <h1>Employee Bank</h1>
      </div>
      <div className="employee-bank-table">
        {employeeRows.map((_, index) => (
          <EmployeeBankTableRow
            key={index}
            removeEmployee={() => handleRemoveEmployee(index)}
          />
        ))}
      </div>
      <div className="employee-bank-add-btn">
        <button type="button" onClick={handleAddEmployee}>
          +
        </button>
      </div>
    </div>
  );
};
export default EmployeeBank;
