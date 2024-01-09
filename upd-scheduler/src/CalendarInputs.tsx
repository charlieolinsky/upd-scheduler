import React, { useState } from "react";
import Calendar from "./Calendar";
import "./styles/CalendarInputs.css";

interface CalendarInputsProps {}

const CalendarInputs: React.FC<CalendarInputsProps> = () => {
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(event.target.value);
  };

  return (
    <>
      <div className="calendar-inputs">
        <label htmlFor="year">
          Year:
          <input
            id="year"
            type="text"
            value={year}
            onChange={handleYearChange}
          />
        </label>
        <label htmlFor="month">
          Month:
          <input
            id="month"
            type="text"
            value={month}
            onChange={handleMonthChange}
          />
        </label>
      </div>
      {year && month && (
        <div className="calendar">
          <Calendar year={year} month={month} />
        </div>
      )}
    </>
  );
};

export default CalendarInputs;
