import CalendarBlock from "./CalendarBlock";
import "./styles/Calendar.css";

interface CalendarProps {
  year: number;
  month: number;
  monthName: string;
  selectedEmployee: number;
}

const Calendar: React.FC<CalendarProps> = ({
  year,
  month,
  monthName,
  selectedEmployee,
}) => {
  //Create an array of 35 unique CalendarBlock components with unique indicies
  const calendarBlocks = Array.from({ length: 42 }, (_, i) => (
    <CalendarBlock
      index={i}
      calendarNumbers={Array(42).fill(null)}
      handleScheduleEmployee={() => null}
      selectedEmployee={-1}
    />
  ));

  //Generate the appropriate numbers for each day of any given month or year
  function getCalendarNumbers(year: number, month: number) {
    //Create a Date() for the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    //Get day of the week for that first day
    const startingDayOfWeek = firstDayOfMonth.getDay();
    //Calculate the number of days in the month.
    const daysInMonth = new Date(year, month + 1, 0).getDate(); //Date points to the day before the first day of the next month. (last day of the current month)
    //Initialize Array to store numbers
    const calendarNumbers = new Array(42).fill(null);

    //Calculate the numbers for each day of the month
    //i represents the first day of the month (starts at 0)
    for (let i = 0; i < daysInMonth; i++) {
      calendarNumbers[i + startingDayOfWeek] = i + 1;
    }
    return calendarNumbers;
  }

  const handleScheduleEmployee = (nameCardId: string) => {
    console.log("Employee Assigned to NameCard #" + nameCardId);
  };

  return (
    <div className="calendar-header">
      {/* <h1>
        {monthName}, {year}.
      </h1> */}

      <div className="calendar-grid">
        {calendarBlocks.map((_, i) => (
          <CalendarBlock
            key={i}
            index={i}
            calendarNumbers={getCalendarNumbers(year, month - 1)}
            handleScheduleEmployee={handleScheduleEmployee}
            selectedEmployee={selectedEmployee}
          />
        ))}
      </div>
    </div>
  );
};
export default Calendar;
