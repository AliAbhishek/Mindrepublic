import React, { useEffect, useState } from "react";
import { setLogger } from "react-query";

function Avsilsibility() {
  const days = [
    {
      day: "All Days",
      timeSlot: [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
    {
      day: "Monday",
      timeSlot: [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
    {
      day: "Tuesday",
      timeSlot: [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
    {
      day: "Wednesday",
      timeSlot: [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
    {
      day: "Thursday",
      timeSlot: [
       "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
    {
      day: "Friday",
      timeSlot: [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
    {
      day: "Saturday",
      timeSlot: [
        "00:00-01:00",
        "01:00-02:00",
        "02:00-03:00",
        "03:00-04:00",
        "04:00-05:00",
        "05:00-06:00",
        "06:00-07:00",
        "07:00-08:00",
        "08:00-09:00",
      ],
    },
  ];

  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState({});
  const [result, setResult] = useState([]);

  const handleCheckboxChange = (e, dayName) => {
    if (e.target.checked) {
      setSelectedDays([...selectedDays, dayName]);
    } else {
      setSelectedDays(selectedDays.filter((day) => day !== dayName));
      // Clear selected time slots for the unselected day
      setSelectedTime((prevState) => {
        const newState = { ...prevState };
        delete newState[dayName];
        return newState;
      });
    }
  };

  const handleTime = (e, dayName, time) => {
    setSelectedTime((prevState) => {
      const newState = { ...prevState };
      if (e.target.checked) {
        if (!newState[dayName]) {
          newState[dayName] = [];
        }
        newState[dayName].push(time);
      } else {
        newState[dayName] = newState[dayName].filter((slot) => slot !== time);
        if (newState[dayName].length === 0) {
          delete newState[dayName];
        }
      }
      return newState;
    });
  };

  useEffect(() => {
    if (selectedDays.length > 0) {
      const newResult = []; // Create a new array to hold the updated results

      selectedDays.forEach((day, i) => {
        newResult.push(`availability[${i}][day]:${day}`);

        if (selectedTime[day]) {
          selectedTime[day].forEach((time, j) => {
            const [opening, closing] = time.split('-');
            newResult.push(`availability[${i}][day]timearr[${j}][opening]:${opening}`);
            newResult.push(`availability[${i}][day]timearr[${j}][closing]:${closing}`);
          });
        }
      });

      setResult(newResult); // Update the result state once after the loop
    } else {
      setResult([]); // Clear the result if no days are selected
    }
  }, [selectedDays, selectedTime]);
  

  // useEffect(() => {
  //   if (selectedDays?.length > 0) {
  //     for (let i = 0; i < selectedTime?.length; i++) {
  //       setResult([...result, ``);
  //     }
  //   }
  // }, [result]);

  console.log(result, "res");

  //   useEffect(()=>{

  //   },[day,time])

  return (
    <div>
      {days?.map((data, index) => (
        <div key={index}>
          <input
            onChange={(e) => handleCheckboxChange(e, data.day)}
            type="checkbox"
            checked={selectedDays.includes(data.day)}
          />
          {data?.day}
          <div style={{ display: "flex", gap: "10px" }}>
            {data?.timeSlot?.map((time, i) => (
              <div key={i} style={{ display: "flex" }}>
                <input
                  onChange={(e) => handleTime(e, data.day, time)}
                  type="checkbox"
                  checked={
                    selectedTime[data.day] &&
                    selectedTime[data.day].includes(time)
                  }
                />
                <p>{time}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Avsilsibility;
