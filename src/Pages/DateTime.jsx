import { Box, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { ThemeProvider } from "styled-components";

const DateTime = () => {
  let handleSelect = (date) => {
    console.log(date); // Momentjs object
  };
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  return (
    <ThemeProvider
      theme={{
        breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: "system-ui, -apple-system",
          colors: {
            accessibility: "#D80249",
            selectedDay: "#f7518b",
            selectedDayHover: "#F75D95",
            primaryColor: "#d8366f",
          },
        },
      }}
    >
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        preventSnapRefocus={true}
        calendarFocus="backwards"
      />
    </ThemeProvider>
  );
};

export default DateTime;
