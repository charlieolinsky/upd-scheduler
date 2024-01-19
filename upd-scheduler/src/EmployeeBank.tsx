import React, { useContext, useState } from "react";
import EmployeeBankTableRow from "./EmployeeBankTableRow";
import "./styles/EmployeeBank.css";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";

interface EmployeeBankProps {
  setSelectedEmployee: (name: string) => void;
}

const EmployeeBank: React.FC<EmployeeBankProps> = ({ setSelectedEmployee }) => {
  const [nextId, setNextId] = useState(0);
  const { employeeRows, setEmployeeRows } = useContext(EmployeeRowsContext);

  const handleAddEmployee = () => {
    const enteredName = prompt("Enter Employee Name: ");
    if (enteredName) {
      const newEmployee = { id: nextId, name: enteredName, count: 0 };
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
            employeeCount={row.count}
            handleRemoveEmployee={handleRemoveEmployee}
            handleSelectEmployee={handleSelectEmployee}
          />
        ))}
        <div>
          <button
            className="employee-bank-add-btn"
            type="button"
            onClick={handleAddEmployee}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmployeeBank;
