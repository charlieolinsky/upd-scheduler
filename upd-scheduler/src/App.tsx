import { useEffect, useState } from "react";
import CalenderInputs from "./CalendarInputs";
import EmployeeBank from "./EmployeeBank";
import "./styles/App.css";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState<number>(-1);

  useEffect(() => {
    console.log("App State selectEmployee = " + selectedEmployee);
  }, [selectedEmployee]);

  return (
    <div className="app-main">
      <EmployeeBank setSelectedEmployee={setSelectedEmployee} />
      <CalenderInputs selectedEmployee={selectedEmployee} />
    </div>
  );
}

export default App;
