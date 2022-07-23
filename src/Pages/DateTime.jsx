import { Box, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { ThemeProvider } from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

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

  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   if (state.length === 0) {
  //     setState([
  //       {
  //         startDate: new Date(),
  //         endDate: addDays(new Date(), 7),
  //         key: "selection",
  //       },
  //     ]);
  //   }
  // }, [state, setState]);
  return (
    // <ThemeProvider>
    <Box height={"100vh"} backgroundColor="white" color={"black"}>
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
    </Box>
    // </ThemeProvider>
    // <div key={JSON.stringify(state)}>
    //   <h1>Hello</h1>
    //   <DateRangePicker
    //     onChange={(item) => setState([item.selection])}
    //     showSelectionPreview={true}
    //     moveRangeOnFirstSelection={false}
    //     months={2}
    //     ranges={state}
    //     direction="horizontal"
    //   />
    // </div>
  );
};

export default DateTime;
