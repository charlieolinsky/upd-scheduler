import { useState } from "react";

interface CalendarNameCardProps {
  nameCardId: string;
  selectedEmployee: string;
}

const CalendarNameCard: React.FC<CalendarNameCardProps> = ({
  nameCardId,
  selectedEmployee,
}) => {
  const [employee, setEmployee] = useState("N/A");

  const handleScheduleEmployee = (nameCardId: string) => {
    console.log(
      "Employee Name: " +
        selectedEmployee +
        " scheduled to NameCard " +
        nameCardId
    );

    setEmployee(selectedEmployee);
  };

  return (
    <div
      className="cal-name-card"
      onClick={() => handleScheduleEmployee(nameCardId)}
    >
      <h2>{employee}</h2>
    </div>
  );
};
export default CalendarNameCard;
