import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import TicketItem from "../components/TicketItem";

function Tickets() {
  const dispatch = useDispatch();
  const { tickets, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.tickets
  );

  useEffect(() => {
    dispatch(getTickets());

    if (isError) {
      toast.error(message);
    }
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isError]);

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
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </>
  );
}

export default Tickets;
