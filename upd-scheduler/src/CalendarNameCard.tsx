import { useState, useContext } from "react";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";
import { SelectedEmployeeContext } from "./contexts/SelectedEmployeeContext";

interface CalendarNameCardProps {
  blockId: number;
  nameCardId: string;
  scheduleMode: boolean;
}

const CalendarNameCard: React.FC<CalendarNameCardProps> = ({
  blockId,
  nameCardId,
  scheduleMode,
}) => {
  const [employee, setEmployee] = useState<string>("N/A"); //represents the current name on the card
  const { employeeRows, setEmployeeRows } = useContext(EmployeeRowsContext); //represents employee bank contents
  const { selectedEmployee } = useContext(SelectedEmployeeContext); //represents employee selected in bank

  const handleScheduleEmployee = (nameCardId: string) => {
    let isUpdated = false; //flag to track if an update is made

    //If user is in 'Shedule Mode'
    if (scheduleMode) {
      // Create a new employeeRows array representing the updated count for the selected employee
      const updatedEmployeeRows = employeeRows.map((row) => {
        //If the row represents the selected employee ; the employee is not already scheduled in this block ; employee has not been assigned already
        if (
          row.name === selectedEmployee &&
          !row.blocks.includes(blockId) &&
          employee === "N/A"
        ) {
          // Increment the count for the matched employee and add the blockID. set update flag
          isUpdated = true;
          return {
            ...row,
            count: row.count + 1,
            blocks: [...row.blocks, blockId],
          };
        }
        return row; // Return the row unchanged if it's not the matched employee
      });

      //if a change was made to an employeeRow
      if (isUpdated) {
        // Update the employeeRows state with the new array
        setEmployeeRows(updatedEmployeeRows);
        // Set the employee name for the current name card
        setEmployee(selectedEmployee);

        console.log(
          "Employee Name: " +
            selectedEmployee +
            " scheduled to NameCard " +
            nameCardId
        );
      }
    } else {
      handleDescheduleEmployee(employee, nameCardId, isUpdated);
    }
  };

  const handleDescheduleEmployee = (
    employee: string,
    nameCardId: string,
    isUpdated: boolean
  ) => {
    if (employee !== "N/A") {
      const updatedEmployeeRows = employeeRows.map((row) => {
        if (row.name === employee) {
          //Decrement Count, Remove the blockID from the employees blocks array, set flag
          isUpdated = true;
          const newBlocks = row.blocks?.filter((id) => id !== blockId);
          return {
            ...row,
            count: row.count > 0 ? row.count - 1 : 0,
            blocks: newBlocks,
          };
        }
        return row;
      });
      if (isUpdated) {
        setEmployeeRows(updatedEmployeeRows);
        setEmployee("N/A");
        console.log("Employee Deschduled from NameCard " + nameCardId);
      }
    }
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
