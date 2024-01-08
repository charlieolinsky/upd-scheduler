import CalendarNumber from "./CalendarNumber";
import CalendarNameCard from "./CalendarNameCard";

//CSS
import "./styles/CalendarBlock.css";

function CalenderBlock() {
  return (
    <div className="cal-block-container">
      <CalendarNumber />
      <CalendarNameCard />
      <CalendarNameCard />
      <CalendarNameCard />
    </div>
  );
}

export default CalenderBlock;
