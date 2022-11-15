import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addform from "./components/Addform/Addform";
import Editform from "./components/Editform/Editform";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import axios from "axios";
import { useState } from "react";

function App() {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);

  const [oneProduct, setOneProduct] = useState(null);

  //! ADD PRODUCT

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }

  //!READ

  async function getProducts() {
    let result = await axios.get(API);
    setProducts(result.data);
  }

  //! DELETE

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  //! GET FOR EDIT
  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }

  //! UPDATE (patch request)

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              products={products}
              getProducts={getProducts}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/add" element={<Addform addProduct={addProduct} />} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route
          path="/edit/:id"
          element={
            <Editform
              updateProduct={updateProduct}
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
