import { useState } from "react";
import Calendar from "react-calendar";

//CSS
import "./CalendarBlock.css";
//Deafult CSS for Calendar
//import "react-calendar/dist/Calendar.css";

function CalenderBlock() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="cal-container">
        <Calendar value={date} />
      </div>
    </>
  );
}

export default CalenderBlock;
