import { useState } from "react";
import Calendar from "react-calendar";
//Deafult CSS for Calendar
//import "react-calendar/dist/Calendar.css";

function CalenderCard() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar value={date} />
    </>
  );
}

export default CalenderCard;
