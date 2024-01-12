interface CalendarNumberProps {
  number: number;
}

const CalendarNumber: React.FC<CalendarNumberProps> = ({ number }) => {
  return (
    <div className="cal-number">
      <h1> {number ? number : 0} </h1>
    </div>
  );
};
export default CalendarNumber;
