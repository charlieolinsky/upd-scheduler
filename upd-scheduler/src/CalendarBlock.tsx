import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";
import "./styles/Calendar.css";

interface CalendarBlockProps {
  index: number;
  calendarNumbers: any[];
  scheduleMode: boolean;
  nameCardCount: number;
}

const CalendarBlock: React.FC<CalendarBlockProps> = ({
  index,
  calendarNumbers,
  scheduleMode,
  nameCardCount,
}) => {
  const nameCards = [];
  for (let i = 0; i < nameCardCount; i++) {
    nameCards.push(
      <CalendarNameCard
        key={index + String.fromCharCode(97 + i)}
        blockId={index}
        nameCardId={index + String.fromCharCode(97 + i)}
        scheduleMode={scheduleMode}
      />
    );
  }

  return (
    <>
      <div className="calendar-block">
        {calendarNumbers[index] !== null ? (
          <>
            <CalendarNumber number={calendarNumbers[index]} />
            {nameCards}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CalendarBlock;
