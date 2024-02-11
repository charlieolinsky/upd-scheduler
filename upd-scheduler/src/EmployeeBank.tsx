import React, { useContext, useState } from "react";
import EmployeeBankTableRow from "./EmployeeBankTableRow";
import "./styles/EmployeeBank.css";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";
import { SelectedEmployeeContext } from "./contexts/SelectedEmployeeContext";
import { DeleteEmployeeContext } from "./contexts/DeleteEmployeeContext";
import Modal from "./Modal";

interface EmployeeBankProps {}

const EmployeeBank: React.FC<EmployeeBankProps> = () => {
  //Employee Bank State Control
  const [nextId, setNextId] = useState(0); //ID for the next employee to be added
  const { employeeRows, setEmployeeRows } = useContext(EmployeeRowsContext); //represents employee bank contents
  const { selectedEmployee, setSelectedEmployee } = useContext(
    //represents employee selected in bank
    SelectedEmployeeContext
  );
  const { setDeleteId } = useContext(DeleteEmployeeContext); //represents employee to delete from whole calendar

  //Modal State Control
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEmployee = () => {
    setIsModalOpen(true);
  };

  const handleSaveEmployeeToBank = (enteredName: string) => {
    if (
      enteredName != "" &&
      employeeRows.some(
        (row) => row.name.toLowerCase() === enteredName?.toLowerCase()
      )
    ) {
      console.log("Error: Name Already Exists");
      return;
    } else if (enteredName != "" && enteredName != null) {
      const newEmployee = {
        id: nextId,
        name: enteredName,
        count: 0,
        blocks: [],
      };
      setEmployeeRows([...employeeRows, newEmployee]);
      setNextId(nextId + 1);
      setIsModalOpen(false);
    }
  };

  const handleRemoveEmployee = (idToRemove: number) => {
    // Remove the employee from the employeeRows array
    const newEmployeeRows = employeeRows.filter((row) => row.id !== idToRemove);
    setEmployeeRows(newEmployeeRows);

    // Set ID to delete from whole calendar
    setDeleteId(idToRemove);
  };

  const handleSelectEmployee = (employeeName: string, rowId: number) => {
    console.log("Employee Selected! Name: " + employeeName + ", id: " + rowId);
    setSelectedEmployee({ name: employeeName, id: rowId });
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
            rowId={row.id}
            employeeName={row.name}
            employeeCount={row.count}
            handleRemoveEmployee={handleRemoveEmployee}
            handleSelectEmployee={handleSelectEmployee}
            isSelected={selectedEmployee.id === row.id}
          />
        ))}
        <div className="employee-bank-add-btn">
          <button type="button" onClick={handleAddEmployee}>
            +
          </button>
        </div>
        <div>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={(name: string) => {
              handleSaveEmployeeToBank(name);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default EmployeeBank;
