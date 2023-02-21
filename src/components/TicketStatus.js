import React from "react";
import { useSelector } from "react-redux";
import "./../styles/TicketStatus.css";

const TicketStatus = () => {
  const travelData = useSelector((state) => state.travel.value);
  console.log(travelData);
  return (
    <div>
      <h1>TicketStatus</h1>
    </div>
  );
};

export default TicketStatus;
