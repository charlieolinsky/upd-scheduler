import React, { useState } from "react";
import EmployeeBankTableRow from "./EmployeeBankTableRow";
import "./styles/EmployeeBank.css";

interface EmployeeBankProps {}

const EmployeeBank: React.FC<EmployeeBankProps> = () => {
  const [employeeRows, setEmployeeRows] = useState<JSX.Element[]>([]);

  const handleAddEmployee = () => {
    const newRow = <EmployeeBankTableRow key={employeeRows.length} />;
    setEmployeeRows([...employeeRows, newRow]);
  };

  return (
    <div className="employee-bank-main">
      <div className="employee-bank-header">
        <h1>Employee Bank</h1>
      </div>
      <div className="employee-bank-table">
        {employeeRows.map((employeeRow) => employeeRow)}
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
