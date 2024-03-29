import React, { useState, useContext } from "react";
import Calendar from "./Calendar";
import "./styles/Calendar.css";
//PDF
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { EmployeeRowsContext } from "./contexts/EmployeeRowsContext";

interface CalendarInputsProps {}

const CalendarInputs: React.FC<CalendarInputsProps> = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [scheduleMode, setScheduleMode] = useState<boolean>(true);
  const [nameCardCount, setNameCardCount] = useState<number>(3);
  const { employeeRows, setEmployeeRows } = useContext(EmployeeRowsContext);

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

  const handleIncrementNameCardCount = () => {
    if (nameCardCount < 5) {
      setNameCardCount(nameCardCount + 1);
    } else {
      console.log("Name card count must be between 3 and 5.");
    }
  };

  const handleDecrementNameCardCount = () => {
    if (nameCardCount > 3) {
      setNameCardCount(nameCardCount - 1);

      // Remove employee's assigned to 4th and 5th name cards and update employeeRows.
      const charMap: { [key: number]: string } = {
        5: "e",
        4: "d",
      };
      setEmployeeRows(
        employeeRows.map((row) => {
          let countDecrease = 0;
          const filteredNameCardIds = row.nameCardIds.filter((id) => {
            if (id.includes(charMap[nameCardCount])) {
              countDecrease++;
              return false;
            }
            return true;
          });
          return {
            ...row,
            nameCardIds: filteredNameCardIds,
            count: row.count - countDecrease,
          };
        })
      );
    }
  };

  const exportPDF = () => {
    const input = document.getElementById("calendar-main");
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save(`upd-schedule-${months[month - 1].toLowerCase()}-${year}.pdf`);
      });
    } else {
      console.log("Error: Element not found (PDF)");
    }
  };

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

  // Can I improve this? I want it to dynamically update the years based on the current year.
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
    <div className="calendar-main" id="calendar-main">
      <div className="calendar-toolbar">
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

        <div className="calendar-inputs">
          <select
            id="month-select"
            value={selectedMonthName}
            onChange={handleMonthChange}
          >
            {months.map((monthOption, monthIndex) => (
              <option key={monthIndex} value={monthOption}>
                {monthOption}
              </option>
            ))}
          </select>
          <select id="year-select" value={year} onChange={handleYearChange}>
            {years.map((yearOption, yearIndex) => (
              <option key={yearIndex} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>
        </div>

        <div className="calendar-name-card-counter">
          <label
            id="calendar-name-card-counter-label"
            htmlFor="name-card-sub-button"
          >
            Employee's Per Shift:
          </label>
          <button
            id="name-card-sub-button"
            onClick={handleDecrementNameCardCount}
          >
            {" "}
            -{" "}
          </button>
          <span>{nameCardCount}</span>
          <button onClick={handleIncrementNameCardCount}> + </button>
        </div>

        <div className="pdf-btn-container">
          <button className="pdf-btn" onClick={exportPDF}>
            Export
          </button>
        </div>
      </div>

      {year && month && (
        <div className="calendar">
          <Calendar
            days={days}
            year={year}
            month={month}
            monthName={selectedMonthName}
            scheduleMode={scheduleMode}
            nameCardCount={nameCardCount}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarInputs;
