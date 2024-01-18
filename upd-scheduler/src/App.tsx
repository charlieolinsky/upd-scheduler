import { useEffect, useState } from "react";
import CalenderInputs from "./CalendarInputs";
import EmployeeBank from "./EmployeeBank";
import "./styles/App.css";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";

function App() {
  const [employeeRows, setEmployeeRows] = useState<
    Array<{ id: number; name: string; count: number }>
  >([]);
  const [selectedEmployee, setSelectedEmployee] = useState<string>("NaN");

  return (
    <div className="app-main">
      <EmployeeRowsContext.Provider value={{ employeeRows, setEmployeeRows }}>
        <EmployeeBank setSelectedEmployee={setSelectedEmployee} />
        <CalenderInputs selectedEmployee={selectedEmployee} />
      </EmployeeRowsContext.Provider>
    </div>
  );
}

export default App;
