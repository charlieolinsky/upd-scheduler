interface CalendarNumberProps {
  number: number;
}

const CalendarNumber: React.FC<CalendarNumberProps> = ({ number }) => {
  return (
    <div className="calendar-number">
      <h1> {number} </h1>
    </div>
  );
};
export default CalendarNumber;
