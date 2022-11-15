import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Editform = ({ getOneProduct, oneProduct, updateProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [descr, setDescr] = useState("");

  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setDescr(oneProduct.descr);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleValues() {
    let editedProduct = {
      title: title,
      price: price,
      descr: descr,
      image: image,
    };
    updateProduct(params.id, editedProduct);
    setTitle("");
    setPrice("");
    setDescr("");
    setImage("");
  }

  return (
    <div className="container">
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
      <Link to="/">
        <button onClick={() => handleValues()}>SAVE</button>
      </Link>
    </div>
  );
};

export default Editform;
