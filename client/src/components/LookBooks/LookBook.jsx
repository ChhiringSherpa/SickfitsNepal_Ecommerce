import React, { useState, useEffect } from "react";
import "./LookBook.css";
import axios from "axios";

function LookBook() {
  const [allProducts, setAllProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");
  const [product1, setProduct1] = useState("");
  const [product2, setProduct2] = useState("");
  const [product3, setProduct3] = useState("");
  const [product4, setProduct4] = useState("");

  //fetching all the products from the backend and mapping it in lisitems
  const listitems = allProducts.map((value) => (
    <div className="col-lg-8 mb-5 mainlookbook  ">
      <div className="row">
        <div className="col-lg-6">
          <img
            src={`http://localhost:3001/${value.mainImage}`}
            className="image"
            width="100%"
            alt="..."
            onClick={() => {
              console.log(value.image1);
            }}
          />
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={`http://localhost:3001/${value.product1}`}
                className="image"
                width="100%"
                alt="..."
                onClick={() => {
                  console.log(value.image1);
                }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={`http://localhost:3001/${value.product2}`}
                className="image"
                width="100%"
                alt="..."
                onClick={() => {
                  console.log(value.image1);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={`http://localhost:3001/${value.product3}`}
                className="image"
                width="100%"
                alt="..."
                onClick={() => {
                  console.log(value.image1);
                }}
              />
            </div>
            <div className="col-lg-6">
              <img
                src={`http://localhost:3001/${value.product4}`}
                className="image"
                width="100%"
                alt="..."
                onClick={() => {
                  console.log(value.image1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  useEffect(() => {
    axios.get("http://localhost:3001/lookbook").then((response) => {
      console.log(response);
      setAllProducts(response.data).sort({ createdAt: -1 });
    });
  }, []);

  const addLookBook = async () => {
    const formData = new FormData();
    formData.append("mainImage", mainImage);
    formData.append("product1", product1);
    formData.append("product2", product2);
    formData.append("product3", product3);
    formData.append("product4", product4);

    console.log(formData);
  };

  const AdminMenu = () => {
    if (localStorage.getItem("email") === "admin@admin.com") {
      return (
        <>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Main Image
            </label>
            <input
              type="file"
              name="mainImage"
              className="form-control mb-3"
              placeholder="mainImage"
              onchange={(event) => {
                setMainImage(event.target.files[0]);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Product 1
            </label>
            <input
              type="file"
              name="product1"
              className="form-control mb-3"
              placeholder="product1"
              onchange={(event) => {
                setProduct1(event.target.files[0]);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Product 2
            </label>
            <input
              type="file"
              name="product2"
              className="form-control mb-3"
              placeholder="product2"
              onchange={(event) => {
                setProduct2(event.target.files[0]);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Product 3
            </label>
            <input
              type="file"
              name="product3"
              className="form-control mb-3"
              placeholder="product3"
              onchange={(event) => {
                setProduct3(event.target.files[0]);
              }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Product 4
            </label>
            <input
              type="file"
              name="product4"
              className="form-control mb-3"
              placeholder="product4"
              onchange={(event) => {
                setProduct4(event.target.files[0]);
              }}
            />
          </div>

          <button type="submit" onClick={addLookBook} className="btn btn-dark">
            Add Lookbook
          </button>
        </>
      );
    }
  };

  return (
    <div className="container lookbook mx-auto">
      <div className="col-lg-12  mb-5 ">
        <AdminMenu />
      </div>
      <div className="col-lg-12 lookbooks ">
        <div className="row">{listitems}</div>
      </div>
    </div>
  );
}

export default LookBook;
