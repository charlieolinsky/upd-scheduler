import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";
import "./styles/Calendar.css";

interface CalendarBlockProps {
  index: number;
  calendarNumbers: any[];
  selectedEmployee: string;
  scheduleMode: boolean;
}

const CalendarBlock: React.FC<CalendarBlockProps> = ({
  index,
  calendarNumbers,
  selectedEmployee,
  scheduleMode,
}) => {
  return (
    <div className="calendar-block">
      <CalendarNumber number={calendarNumbers[index]} />
      <CalendarNameCard
        blockId={index}
        nameCardId={index + "a"}
        selectedEmployee={selectedEmployee}
        scheduleMode={scheduleMode}
      />
      <CalendarNameCard
        blockId={index}
        nameCardId={index + "b"}
        selectedEmployee={selectedEmployee}
        scheduleMode={scheduleMode}
      />
      <CalendarNameCard
        blockId={index}
        nameCardId={index + "c"}
        selectedEmployee={selectedEmployee}
        scheduleMode={scheduleMode}
      />
      {/* <h3>{"Index: " + index}</h3> */}
    </div>
  );
};

export default CalendarBlock;
