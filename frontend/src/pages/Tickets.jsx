import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/tickets/ticketSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function Tickets() {
  const dispatch = useDispatch();
  const { tickets, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.ticket
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

  return isLoading ? <Spinner /> : <></>;
}

export default Tickets;
