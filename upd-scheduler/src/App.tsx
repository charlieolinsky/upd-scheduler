import { useState } from "react";
import CalenderInputs from "./CalendarInputs";
import EmployeeBank from "./EmployeeBank";
import "./styles/App.css";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";
import { SelectedEmployeeContext } from "./contexts/SelectedEmployeeContext";

function App() {
  const [employeeRows, setEmployeeRows] = useState<
    Array<{ id: number; name: string; count: number; blocks: Array<number> }>
  >([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("NaN");

  return (
    <div className="app-main">
      <EmployeeRowsContext.Provider value={{ employeeRows, setEmployeeRows }}>
        <SelectedEmployeeContext.Provider
          value={{ selectedEmployee, setSelectedEmployee }}
        >
          <EmployeeBank />
          <CalenderInputs />
        </SelectedEmployeeContext.Provider>
      </EmployeeRowsContext.Provider>
    </div>
  );
}

export default App;
