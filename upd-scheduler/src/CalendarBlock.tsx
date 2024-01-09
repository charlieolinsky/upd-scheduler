import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";
import "./styles/CalendarBlock.css";

interface CalendarBlockProps {
  index: number;
  calendarNumbers: any;
}

const CalendarBlock: React.FC<CalendarBlockProps> = ({ index }) => {
  return (
    <div className={`cal-block-${index}`}>
      <CalendarNumber index={index} />
      <CalendarNameCard />
      <CalendarNameCard />
      <CalendarNameCard />
      <h3>{"Index: " + index}</h3>
    </div>
  );
};

export default CalendarBlock;
