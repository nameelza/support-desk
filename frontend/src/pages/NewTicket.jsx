import { useState } from "react";
import { useSelector } from "react-redux";

function NewTicket() {
  const { user } = useSelector((user) => user.auth);
  const { name, email } = user;
  const [product, setProduct] = useState("iPhone");
  const [description, setDescription] = useState("");

  return (
    <>
      <section className="heading">
        <h1>Create new ticket</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            id="name"
            value={name}
            className="form-control"
            disabled
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Customer Email</label>
          <input
            type="text"
            id="email"
            value={email}
            className="form-control"
            disabled
          />
        </div>
      </section>
    </>
  );
}

export default NewTicket;
