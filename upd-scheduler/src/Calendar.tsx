import CalendarBlock from "./CalendarBlock";
import "./styles/Calendar.css";

interface CalendarProps {
  year: number;
  month: number;
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  //Create an array of 35 unique CalendarBlock components with unique keys
  const calendarBlocks = Array.from({ length: 35 }, (_, i) => (
    <CalendarBlock index={i} calendarNumbers={Array(35).fill(null)} />
  ));

  //Generate the appropriate numbers for each day of any given month or year
  function getCalendarNumbers(year: number, month: number) {
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarNumbers = new Array(35).fill(null);

    for (let i = 0; i < daysInMonth; i++) {
      calendarNumbers[i + startingDayOfWeek] = i + 1;
    }
    return calendarNumbers;
  }

  return (
    <div className="calendar-main">
      <h1>
        Calendar for {month}, {year}.
      </h1>

      <div className="calendar-grid">
        {calendarBlocks.map((_, i) => (
          <CalendarBlock
            index={i}
            calendarNumbers={getCalendarNumbers(year, month)}
          />
        ))}
      </div>
    </div>
  );
};
export default Calendar;
