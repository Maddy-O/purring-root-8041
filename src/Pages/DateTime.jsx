import { Box, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

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
    <>
      <Container>
        <Box>
          <DateRange onInit={handleSelect} onChange={handleSelect} />
        </Box>
      </Container>
      <Box>
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
    </>
  );
};

export default DateTime;
