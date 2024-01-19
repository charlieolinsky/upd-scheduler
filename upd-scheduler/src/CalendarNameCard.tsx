import { useState, useContext } from "react";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";

interface CalendarNameCardProps {
  nameCardId: string;
  selectedEmployee: string;
}

const CalendarNameCard: React.FC<CalendarNameCardProps> = ({
  nameCardId,
  selectedEmployee,
}) => {
  const [employee, setEmployee] = useState("N/A");
  const { employeeRows, setEmployeeRows } = useContext(EmployeeRowsContext);

  const handleScheduleEmployee = (nameCardId: string) => {
    console.log(
      "Employee Name: " +
        selectedEmployee +
        " scheduled to NameCard " +
        nameCardId
    );

    // Create a new array with updated count for the selected employee
    const updatedEmployeeRows = employeeRows.map((row) => {
      if (row.name === selectedEmployee) {
        // Increment the count for the matched employee
        return { ...row, count: row.count + 1 };
      }
      return row; // Return the row unchanged if it's not the matched employee
    });

    // Update the state with the new array
    setEmployeeRows(updatedEmployeeRows);

    // Set the employee name for the current name card
    setEmployee(selectedEmployee);
  };

  return (
    <div
      className="calendar-name-card"
      onClick={() => handleScheduleEmployee(nameCardId)}
    >
      <h2>{employee}</h2>
    </div>
  );
};
export default CalendarNameCard;
