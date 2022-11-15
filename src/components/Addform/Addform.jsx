import React, { useState } from "react";

const Addform = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");

  function handleValues() {
    let newProduct = {
      title: title,
      price: price,
      descr: descr,
      image: image,
    };
    addProduct(newProduct);
    setTitle("");
    setPrice("");
    setDescr("");
    setImage("");
  }
  return (
    <div className="div">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        value={title}
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Price"
        value={price}
      />
      <input
        onChange={(e) => setDescr(e.target.value)}
        type="text"
        placeholder="Description"
        value={descr}
      />
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        placeholder="Image"
        value={image}
      />
      <button className="btn btn-dark" onClick={() => handleValues()}>
        Add
      </button>
    </div>
  );
};

export default Addform;
