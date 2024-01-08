import CalenderBlock from "./CalendarBlock";

interface CalendarProps {
  year: string;
  month: string;
}

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  return (
    <>
      <h1>
        Calendar for {month}, {year}.
      </h1>

      <CalenderBlock />
      <CalenderBlock />
      <CalenderBlock />
    </>
  );
};
export default Calendar;
