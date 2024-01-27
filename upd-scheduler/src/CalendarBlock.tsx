import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";
import "./styles/Calendar.css";

interface CalendarBlockProps {
  index: number;
  calendarNumbers: any[];
  scheduleMode: boolean;
}

const CalendarBlock: React.FC<CalendarBlockProps> = ({
  index,
  calendarNumbers,
  scheduleMode,
}) => {
  return (
    <div className="calendar-block">
      <CalendarNumber number={calendarNumbers[index]} />
      <CalendarNameCard
        blockId={index}
        nameCardId={index + "a"}
        scheduleMode={scheduleMode}
      />
      <CalendarNameCard
        blockId={index}
        nameCardId={index + "b"}
        scheduleMode={scheduleMode}
      />
      <CalendarNameCard
        blockId={index}
        nameCardId={index + "c"}
        scheduleMode={scheduleMode}
      />
    </div>
  );
};

export default CalendarBlock;
