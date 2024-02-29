import { useEffect, useState } from "react";
import CalenderInputs from "./CalendarInputs";
import EmployeeBank from "./EmployeeBank";
import "./styles/App.css";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";
import { SelectedEmployeeContext } from "./contexts/SelectedEmployeeContext";
import { DeleteEmployeeContext } from "./contexts/DeleteEmployeeContext";

function App() {
  const [employeeRows, setEmployeeRows] = useState<
    Array<{
      id: number;
      name: string;
      count: number;
      blocks: Array<number>;
      nameCardIds: Array<string>;
    }>
  >([]);
  const [selectedEmployee, setSelectedEmployee] = useState<{
    name: string;
    id: number;
  }>({ name: "NaN", id: -1 });
  const [deleteId, setDeleteId] = useState<number>(-999);

  //Debug
  useEffect(() => {
    console.log("Employee Rows: ", employeeRows);
    console.log("Selected Employee: ", selectedEmployee);
    console.log("Delete ID: ", deleteId);
  }, [employeeRows, selectedEmployee, deleteId]);

  return (
    <div className="app-main">
      <EmployeeRowsContext.Provider value={{ employeeRows, setEmployeeRows }}>
        <SelectedEmployeeContext.Provider
          value={{ selectedEmployee, setSelectedEmployee }}
        >
          <DeleteEmployeeContext.Provider value={{ deleteId, setDeleteId }}>
            <EmployeeBank />
            <CalenderInputs />
          </DeleteEmployeeContext.Provider>
        </SelectedEmployeeContext.Provider>
      </EmployeeRowsContext.Provider>
    </div>
  );
}

export default App;
