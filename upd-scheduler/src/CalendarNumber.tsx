interface CalendarNumberProps {
  index: number;
}

const CalendarNumber: React.FC<CalendarNumberProps> = ({ index }) => {
  return (
    <div className="cal-number">
      <h1> {index} </h1>
    </div>
  );
};
export default CalendarNumber;
