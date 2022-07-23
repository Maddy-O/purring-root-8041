import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const DateTime = ({ setDateData }) => {
  const navigate = useNavigate();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  let handleSelect = (date) => {
    let startDate = String(date[0]?.startDate);
    let endDate = String(date[0]?.endDate);
    let bag1 = "";
    let bag2 = "";
    for (let i = 0; i < 16; i++) {
      bag1 += startDate[i];
      bag2 += endDate[i];
    }
    setDateData({ startDate: bag1, endDate: bag2 });
    navigate("/");
  };

  return (
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
      <Box>
        <Button backgroundColor="#e0e0e0" onClick={() => handleSelect(state)}>
          Done
        </Button>
      </Box>
    </Box>
  );
};

export default DateTime;
