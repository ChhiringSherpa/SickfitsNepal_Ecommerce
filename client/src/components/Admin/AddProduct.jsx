import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AddProduct.css";
import { useHistory } from "react-router-dom";

function AddProduct() {
  const [allProduct, setAllProduct] = useState([]);
  const history = useHistory();

  const [brand, setBrand] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [price, setprice] = useState();
  const [description, setdescription] = useState("");
  const [specification, setspecification] = useState("");
  const [category, setcategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [color, setcolor] = useState("");
  const [gender, setgender] = useState("");
  const [size_description1, setsize_description1] = useState("");
  const [size_description2, setsize_description2] = useState("");
  const [size_description3, setsize_description3] = useState("");
  const [model_height, setmodel_height] = useState("");
  const [model_size, setmodel_size] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [image4, setimage4] = useState("");
  const [image5, setimage5] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
      setAllProduct(response.data).sort({ createdAt: -1 });
    });
  }, []);

  const addPost = async () => {
    // const data = {
    //   product_name: product_name,
    //   price: price,
    //   description: description,
    //   category: category,
    //   specification: specification,
    //   subCategory: subCategory,
    //   brand: brand,
    //   color: color,
    //   gender: gender,
    //   size_description1: size_description1,
    //   size_description2: size_description2,
    //   size_description3: size_description3,
    //   model_height: model_height,
    //   model_size: model_size,
    //   image1: image1,
    //   image2: image2,
    //   image3: image3,
    //   image4: image4,
    //   image5: image5,
    // };

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("brand", brand);
    formData.append("specification", specification);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("color", color);
    formData.append("gender", gender);
    formData.append("size_description1", size_description1);
    formData.append("size_description2", size_description2);
    formData.append("size_description3", size_description3);
    formData.append("model_height", model_height);
    formData.append("model_size", model_size);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
    formData.append("image5", image5);

    await axios
      .post("http://localhost:3001/posts", formData)
      .then((response) => {
        if (response.data.message) {
          window.location.reload();
        }
      });
  };
  const listItemsAdmin = allProduct.map((value) => (
    <div className="col-lg-2">
      <div>
        <img
          src={`http://localhost:3001/${value.image1}`}
          className="image"
          width="80%"
          alt="..."
          onClick={() => {
            history.push(`/products/${value.id}`);
          }}
        />
      </div>
      <div className="mt-3">
        <p className="card-title">{value.brand}</p>
        <p className="card-text col-lg-12">{value.product_name}</p>
        <p className="card-text col-lg-12 float-start">Rs {value.price}</p>
      </div>
    </div>
  ));

  return (
    <div className="container addproduct-container">
      <div className="row">
        <div className="col-lg-12 mx auto">
          <div className="row  mb-3">
            <div className="col-lg-12 text-center">
              <div className="mb-3">
                <button
                  type="button"
                  class="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add new product
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Add Product
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label
                                      for="exampleInputEmail1"
                                      className="form-label"
                                    >
                                      Brand
                                    </label>
                                    <input
                                      className="form-control"
                                      id="brand"
                                      aria-describedby="emailHelp"
                                      onChange={(event) => {
                                        setBrand(event.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Product Name
                                    </label>
                                    <input
                                      className="form-control"
                                      id="name"
                                      onChange={(event) => {
                                        setProduct_name(event.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="mb-3">
                                    <label className="form-label">Price</label>
                                    <input
                                      className="form-control"
                                      id="price"
                                      onChange={(event) => {
                                        setprice(parseInt(event.target.value));
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-3">
                              <label
                                for="exampleFormControlTextarea1"
                                className="form-label"
                              >
                                Description
                              </label>
                              <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                onChange={(event) => {
                                  setdescription(event.target.value);
                                }}
                              ></textarea>
                            </div>

                            <div className="mb-3">
                              <label
                                for="exampleInputEmail1"
                                className="form-label"
                              >
                                Specification
                              </label>
                              <input
                                className="form-control"
                                id="specification"
                                onChange={(event) => {
                                  setspecification(event.target.value);
                                }}
                              />
                            </div>

                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label
                                      for="exampleInputEmail1"
                                      className="form-label"
                                    >
                                      Category
                                    </label>

                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                      onChange={(event) => {
                                        setcategory(event.target.value);
                                      }}
                                    >
                                      <option selected>
                                        Open this select menu
                                      </option>
                                      <option value="jacket">Jacket</option>
                                      <option value="hoodie">Hoodie</option>
                                      <option value="pant">Pant</option>
                                      <option value="tee">Tee</option>
                                      <option value="tee">Shirt</option>
                                      <option value="top">Top</option>
                                      <option value="dress">Dress</option>
                                      <option value="short">Shorts</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Sub Category
                                    </label>
                                    <input
                                      className="form-control"
                                      id="subcategory"
                                      onChange={(event) => {
                                        setsubCategory(event.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Color</label>

                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                      onChange={(event) => {
                                        setcolor(event.target.value);
                                      }}
                                    >
                                      <option selected>Choose Color</option>
                                      <option value="black">Black</option>
                                      <option value="white">White</option>
                                      <option value="blue">Blue</option>
                                      <option value="other">Others</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-3">
                                  <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <input
                                      className="form-control"
                                      id="gender"
                                      onChange={(event) => {
                                        setgender(event.target.value);
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mb-3">
                              <label className="form-label">
                                Size Description
                              </label>
                              <input
                                className="form-control mb-3"
                                id="size1"
                                onChange={(event) => {
                                  setsize_description1(event.target.value);
                                }}
                              />
                              <input
                                className="form-control mb-3"
                                id="size2"
                                onChange={(event) => {
                                  setsize_description2(event.target.value);
                                }}
                              />
                              <input
                                className="form-control"
                                id="size3"
                                onChange={(event) => {
                                  setsize_description3(event.target.value);
                                }}
                              />
                            </div>

                            <div class="mb-3">
                              <label
                                for="exampleInputPassword1 "
                                className="form-label"
                              >
                                Model Description
                              </label>

                              <label className="form-label">Model Height</label>
                              <input
                                className="form-control mb-3"
                                id="model height"
                                onChange={(event) => {
                                  setmodel_height(event.target.value);
                                }}
                              />
                              <label className="form-label">Model Size</label>
                              <input
                                className="form-control"
                                id="model_size"
                                onChange={(event) => {
                                  setmodel_size(event.target.value);
                                }}
                              />
                            </div>

                            <div class="mb-3">
                              <label className="form-label">Images</label>
                              <input
                                type="file"
                                name="img1"
                                className="form-control mb-3"
                                placeholder="Image1"
                                onChange={(event) => {
                                  setimage1(event.target.files[0]);
                                }}
                              />

                              <input
                                type="file"
                                name="img2"
                                className="form-control mb-3"
                                placeholder="Image2"
                                onChange={(event) => {
                                  setimage2(event.target.files[0]);
                                }}
                              />
                              <input
                                type="file"
                                name="img3"
                                className="form-control mb-3"
                                placeholder="Image3"
                                onChange={(event) => {
                                  setimage3(event.target.files[0]);
                                }}
                              />
                              <input
                                type="file"
                                name="img4"
                                className="form-control mb-3"
                                placeholder="Image4"
                                onChange={(event) => {
                                  setimage4(event.target.files[0]);
                                }}
                              />
                              <input
                                type="file"
                                name="img5"
                                className="form-control mb-3"
                                placeholder="Image5"
                                onChange={(event) => {
                                  setimage5(event.target.files[0]);
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          onClick={addPost}
                          class="btn btn-dark"
                        >
                          Create Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">{listItemsAdmin}</div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
