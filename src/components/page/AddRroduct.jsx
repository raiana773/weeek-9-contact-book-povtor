import React, { useState } from "react";

function AddProduct() {
  const [contact, setContact] = useState({
    name: "",
    surName: "",
    phoneNumber: "",
  });
  function hendlChange(e) {
    console.log(e.target.name);
    const obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(contact);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => hendlChange(e)}
        value={contact.name}
        type="text"
        name="name"
      />
      <input
        onChange={(e) => hendlChange(e)}
        value={contact.name}
        type="text"
        name="surName"
      />
      <input
        onChange={(e) => hendlChange(e)}
        value={contact.name}
        type="text"
        name="phoneNumber"
      />
      <button>Snmbit</button>
    </form>
  );
}

export default AddProduct;
