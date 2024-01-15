import { useState } from "react";

interface CalendarNameCardProps {
  nameCardId: string;
  selectedEmployee: number;
}

const CalendarNameCard: React.FC<CalendarNameCardProps> = ({
  nameCardId,
  selectedEmployee,
}) => {
  const [employee, setEmployee] = useState("N/A");

  const handleScheduleEmployee = (nameCardId: string) => {
    console.log(
      "Employee #" + selectedEmployee + " scheduled to NameCard " + nameCardId
    );

    setEmployee(selectedEmployee.toString() + nameCardId);
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
