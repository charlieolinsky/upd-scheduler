import React, { useState } from "react";
import EmployeeBankTableRow from "./EmployeeBankTableRow";
import "./styles/EmployeeBank.css";

interface EmployeeBankProps {
  setSelectedEmployee: (name: string) => void;
}

const EmployeeBank: React.FC<EmployeeBankProps> = ({ setSelectedEmployee }) => {
  const [employeeRows, setEmployeeRows] = useState<
    Array<{ id: number; name: string }>
  >([]);
  const [nextId, setNextId] = useState(0);

  const handleAddEmployee = () => {
    const enteredName = prompt("Enter Employee Name: ");
    if (enteredName) {
      const newEmployee = { id: nextId, name: enteredName };
      setEmployeeRows([...employeeRows, newEmployee]);
      setNextId(nextId + 1);
    }
  };

  const handleRemoveEmployee = (idToRemove: number) => {
    const newEmployeeRows = employeeRows.filter((row) => row.id !== idToRemove);
    setEmployeeRows(newEmployeeRows);
  };

  const handleSelectEmployee = (employeeName: string) => {
    console.log("Employee Selected! Name: " + employeeName);
    setSelectedEmployee(employeeName);
  };

  return (
    <div className="employee-bank-main">
      <div className="employee-bank-header">
        <h3>Employee Bank</h3>
      </div>
      <div className="employee-bank-table">
        {employeeRows.map((row) => (
          <EmployeeBankTableRow
            key={row.id}
            id={row.id}
            employeeName={row.name}
            handleRemoveEmployee={handleRemoveEmployee}
            handleSelectEmployee={handleSelectEmployee}
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
