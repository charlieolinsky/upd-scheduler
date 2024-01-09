import CalendarBlock from "./CalendarBlock";
import "./styles/Calendar.css";

interface CalendarProps {
  year: string;
  month: string;
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  //An array of 35 unique CalendarBlock components with unique keys
  const calendarBlocks = Array.from({ length: 35 }, (_, i) => (
    <CalendarBlock index={i} />
  ));

  return (
    <div className="calendar-main">
      <h1>
        Calendar for {month}, {year}.
      </h1>

      <div className="calendar-grid">
        {calendarBlocks.map((_, i) => (
          <CalendarBlock index={i} />
        ))}
      </div>
    </div>
  );
};
export default Calendar;
