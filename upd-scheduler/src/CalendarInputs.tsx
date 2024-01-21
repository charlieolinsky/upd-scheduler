import React, { useEffect, useState } from "react";
import Calendar from "./Calendar";
import "./styles/Calendar.css";

interface CalendarInputsProps {
  selectedEmployee: string;
}

const CalendarInputs: React.FC<CalendarInputsProps> = ({
  selectedEmployee,
}) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);

  const [scheduleMode, setScheduleMode] = useState<boolean>(true);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonthName = event.target.value;
    const monthNumber = months.indexOf(selectedMonthName) + 1;
    setMonth(monthNumber);
  };

  const handleScheduleModeChange = () => {
    setScheduleMode(!scheduleMode);
  };

  //Debug
  useEffect(() => {
    console.log("Mode set to: " + (scheduleMode ? "Schedule" : "Deschedule"));
  }, [scheduleMode]);

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years: string[] = [
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
    "2031",
    "2032",
    "2033",
    "2034",
    "2035",
    "2036",
  ];

  const selectedMonthName = month !== undefined ? months[month - 1] : "";

  return (
    <div className="calendar-main">
      <div className="calendar-inputs">
        <select value={selectedMonthName} onChange={handleMonthChange}>
          {months.map((monthOption, monthIndex) => (
            <option key={monthIndex} value={monthOption}>
              {monthOption}
            </option>
          ))}
        </select>
        <select value={year} onChange={handleYearChange}>
          {years.map((yearOption, yearIndex) => (
            <option key={yearIndex} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-schedule-mode-toggle">
        <input
          type="checkbox"
          id="toggleSwitch"
          checked={scheduleMode}
          onChange={handleScheduleModeChange}
        />
        <label htmlFor="toggleSwitch">
          <span>{scheduleMode ? "Schedule" : "Deschedule"}</span>
        </label>
      </div>

      {year && month && (
        <div className="calendar">
          <Calendar
            days={days}
            year={year}
            month={month}
            monthName={selectedMonthName}
            selectedEmployee={selectedEmployee}
            scheduleMode={scheduleMode}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarInputs;
