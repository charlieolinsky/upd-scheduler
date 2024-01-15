import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";
import "./styles/Calendar.css";

interface CalendarBlockProps {
  index: number;
  calendarNumbers: any[];
  handleScheduleEmployee: (nameCardId: string) => void;
  selectedEmployee: number;
}

const CalendarBlock: React.FC<CalendarBlockProps> = ({
  index,
  calendarNumbers,
  handleScheduleEmployee,
  selectedEmployee,
}) => {
  return (
    <div className={`cal-block-${index}`}>
      <CalendarNumber number={calendarNumbers[index]} />
      <CalendarNameCard
        nameCardId={index + "a"}
        handleScheduleEmployee={handleScheduleEmployee}
        selectedEmployee={selectedEmployee}
      />
      <CalendarNameCard
        nameCardId={index + "b"}
        handleScheduleEmployee={handleScheduleEmployee}
        selectedEmployee={selectedEmployee}
      />
      <CalendarNameCard
        nameCardId={index + "c"}
        handleScheduleEmployee={handleScheduleEmployee}
        selectedEmployee={selectedEmployee}
      />
      {/* <h3>{"Index: " + index}</h3> */}
    </div>
  );
};

export default CalendarBlock;
