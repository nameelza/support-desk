import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import TicketItem from "./TicketItem";

function Tickets() {
  const dispatch = useDispatch();
  const { tickets, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    dispatch(getTickets());
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  console.log(tickets);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <BackButton url="/" />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Product</div>
          <div>Description</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default Tickets;
