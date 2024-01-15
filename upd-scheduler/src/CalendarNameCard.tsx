interface CalendarNameCardProps {
  handleScheduleEmployee: (nameCardId: string) => void;
  nameCardId: string;
  selectedEmployee: number;
}

const CalendarNameCard: React.FC<CalendarNameCardProps> = ({
  handleScheduleEmployee,
  nameCardId,
  selectedEmployee,
}) => {
  return (
    <div
      className="cal-name-card"
      onClick={() => handleScheduleEmployee(nameCardId)}
    >
      <h2>{selectedEmployee}</h2>
    </div>
  );
};
export default CalendarNameCard;
