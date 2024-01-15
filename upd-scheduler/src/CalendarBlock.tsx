import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";
import "./styles/Calendar.css";

interface CalendarBlockProps {
  index: number;
  calendarNumbers: any[];
  selectedEmployee: number;
}

const CalendarBlock: React.FC<CalendarBlockProps> = ({
  index,
  calendarNumbers,
  selectedEmployee,
}) => {
  return (
    <div className={`cal-block-${index}`}>
      <CalendarNumber number={calendarNumbers[index]} />
      <CalendarNameCard
        nameCardId={index + "a"}
        selectedEmployee={selectedEmployee}
      />
      <CalendarNameCard
        nameCardId={index + "b"}
        selectedEmployee={selectedEmployee}
      />
      <CalendarNameCard
        nameCardId={index + "c"}
        selectedEmployee={selectedEmployee}
      />
      {/* <h3>{"Index: " + index}</h3> */}
    </div>
  );
};

export default CalendarBlock;
