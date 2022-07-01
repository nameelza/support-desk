function TicketItem({ ticket }) {
  return (
    <>
      <div>{ticket.createdAt}</div>
      <div>{ticket.product}</div>
      <div>{ticket.description}</div>
      <div></div>
    </>
  );
}

export default TicketItem;
