import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HiOutlineHeart } from "react-icons/hi";
import { Carousel } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Product.css";

function Products() {
  const [productDetail, setProductDetail] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
      console.log(response);
      setProductDetail(response.data);
    });
  }, [id]);

  const MyComponent = () => (
    <select
      onChange={(event) => {
        setSize(event.target.value);
      }}
      class="form-select"
      aria-label="Default select example"
    >
      <option selected>Select size</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="xlarge">XLarge</option>
      <option value="xxlarge">XXLarge</option>
    </select>
  );

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  const addToWishlist = async () => {
    const wishlist = {
      user_id: localStorage.getItem("user_id"),
      product_id: productDetail.id,
      brand: productDetail.brand,
      product_name: productDetail.product_name,
      price: productDetail.price,
      image: productDetail.image1,
    };

    await axios
      .post("http://localhost:3001/wishlist/addtowishlist", wishlist)
      .then((response) => {
        if (response.data.message) {
          console.log(response.message);
        }
        if (response.data.success) {
          toast("Added to wishlist");
        }
      });
  };

  const [size, setSize] = useState("");
  const [user_id, setUser_id] = useState("");

  const addToBag = async () => {
    const bag = {
      user_id: localStorage.getItem("user_id"),
      product_id: productDetail.id,
      user_name: localStorage.getItem("user"),
      brand: productDetail.brand,
      product_name: productDetail.product_name,
      price: productDetail.price,
      image: productDetail.image1,
      size: size,
      color: productDetail.color,
    };

    if (!size) {
      alert("Please select a size");
    } else {
      if (user_id !== null) {
        toast("Login to add to bag");
      } else {
        await axios
          .post("http://localhost:3001/bag/addtobag", bag)
          .then((response) => {
            if (response.data.message) {
              console.log(response.message);
            }
            if (response.data.success) {
              toast("Added to bag");
            }
          });
      }

      console.log(bag);
    }
  };

  const AdminMenu = () => {
    const [brand, setBrand] = useState(productDetail.brand);
    const [product_name, setProduct_name] = useState(
      productDetail.product_name
    );
    const [price, setprice] = useState(productDetail.price);
    const [description, setdescription] = useState(productDetail.description);
    const [specification, setspecification] = useState(
      productDetail.specification
    );
    const [category, setcategory] = useState(productDetail.category);
    const [subCategory, setsubCategory] = useState(productDetail.subCategory);
    const [color, setcolor] = useState(productDetail.color);
    const [gender, setgender] = useState(productDetail.gender);
    const [size_description1, setsize_description1] = useState(
      productDetail.size_description1
    );
    const [size_description2, setsize_description2] = useState(
      productDetail.size_description2
    );
    const [size_description3, setsize_description3] = useState(
      productDetail.size_description3
    );
    const [model_height, setmodel_height] = useState(
      productDetail.model_height
    );
    const [model_size, setmodel_size] = useState(productDetail.model_size);
    const [image1, setimage1] = useState(productDetail.image1);
    const [image2, setimage2] = useState(productDetail.image2);
    const [image3, setimage3] = useState(productDetail.image3);
    const [image4, setimage4] = useState(productDetail.image4);
    const [image5, setimage5] = useState(productDetail.image5);

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

    const updatePost = async () => {
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
        .patch(`http://localhost:3001/posts/${id}`, formData)
        .then((response) => {
          if (response.data.message) {
            window.location.reload();
          }
        });
    };

    const deletePost = async () => {
      await await axios
        .delete(`http://localhost:3001/posts/${id}`)
        .then((response) => {
          if (response.data.message) {
            window.location.reload();
          }
        });
    };

    if (localStorage.getItem("email") === "admin@admin.com") {
      return (
        <>
          <div className="updateModal">
            <div className="row">
              <div className="col-lg-3">
                <button
                  type="button"
                  class="btn btn-dark "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit Product
                </button>
              </div>

              <div className="col-lg-6  ">
                <button
                  type="button"
                  class="btn btn-dark float-start "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  Delete
                </button>

                <div
                  class="modal fade"
                  id="exampleModal1"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        Are you sure you want to delete the product?
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-danger me-3"
                          onClick={deletePost}
                        >
                          Yes
                        </button>
                        <button
                          type="button"
                          class="btn btn-dark"
                          data-bs-dismiss="modal"
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg updateform">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Update Product
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
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
                              <label className="form-label">Product Name</label>
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
                        <label for="exampleInputEmail1" className="form-label">
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
                              <input
                                className="form-control"
                                id="category"
                                onChange={(event) => {
                                  setcategory(event.target.value);
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="mb-3">
                              <label className="form-label">Sub Category</label>
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
                              <input
                                className="form-control"
                                id="color"
                                onChange={(event) => {
                                  setcolor(event.target.value);
                                }}
                              />
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
                        <label className="form-label">Size Description</label>
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
                  <div class="modal-footer">
                    <button
                      type="button"
                      onClick={updatePost}
                      class="btn btn-dark"
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="productfulldetails">
      <ToastContainer />
      <div className="container mt-5">
        <div className="col-lg-10 mx-auto maincontent">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="row">
                <div className="col-lg-12">
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image"
                        src={`http://localhost:3001/${productDetail.image1}`}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image"
                        src={`http://localhost:3001/${productDetail.image2}`}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image"
                        src={`http://localhost:3001/${productDetail.image3}`}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image"
                        src={`http://localhost:3001/${productDetail.image4}`}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100 image"
                        src={`http://localhost:3001/${productDetail.image5}`}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>

            <div className="col-lg-6 details">
              <div className="col-lg-12 ms-5">
                <h3>{productDetail.brand}</h3>
              </div>
              <div className="col-lg-12 ms-5">
                <p>{productDetail.product_name}</p>
              </div>
              <div className="col-lg-12 ms-5">
                <p>Rs {productDetail.price}</p>
              </div>

              <div className="col-lg-6 mt-4 ms-5 sizes">
                <MyComponent />
              </div>
              <div className="row  buttons  mt-4">
                <div className="col-lg-4">
                  <button className="addToBag col-lg-12" onClick={addToBag}>
                    Add to bag
                  </button>
                </div>
                <div className="col-lg-4">
                  <button
                    onClick={addToWishlist}
                    className=" col-lg-12 addToWishlist"
                  >
                    Wishlist &nbsp; <HiOutlineHeart fontSize="1.3em" />
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 ms-5 mt-5">
                  <div className="detail-tabs  col-lg-12">
                    <div
                      className={
                        toggle === 1
                          ? "detail-tab active-detail-tab"
                          : "detail-tab"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      THE DETAILS
                    </div>
                    &nbsp;
                    <div
                      className={
                        toggle === 2
                          ? "detail-tab active-detail-tab"
                          : "detail-tab"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      SIZE & FIT
                    </div>
                    &nbsp;
                    <div
                      className={
                        toggle === 3
                          ? "detail-tab active-detail-tab"
                          : "detail-tab"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      DELIVERY AND RETURNS
                    </div>
                  </div>
                  <div>
                    <hr className="detail-tab-border" />
                  </div>
                  <div className="product-details">
                    <div
                      className={
                        toggle === 1
                          ? "theDetail active-theDetail"
                          : "theDetail"
                      }
                    >
                      <div className="col-lg-10 description">
                        {productDetail.description}
                      </div>
                      <div className="col-lg-9">
                        <div className="col-lg-12 mt-4 mb-2 compostion">
                          COMPOSTION
                        </div>
                        <div className="col-lg-12">
                          {productDetail.specification}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        toggle === 2
                          ? "theDetail active-theDetail"
                          : "theDetail"
                      }
                    >
                      <div className="col-lg-12 float-start">
                        <div className="delivery-details col-lg-10 ">
                          <ul className="product-detail-list">
                            <li>{productDetail.size_description1}</li>
                            <li>{productDetail.size_description2}</li>
                            <li>{productDetail.size_description3}</li>
                          </ul>
                          <div className="col-lg-12 ">
                            <div className="col-lg-12 ms-3 mt-4 mb-2 compostion">
                              WEARING
                            </div>
                            <div className="col-lg-12 ms-3">
                              The model is {productDetail.model_height} and is
                              wearing size {productDetail.model_size}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        toggle === 3
                          ? "theDetail active-theDetail"
                          : "theDetail"
                      }
                    >
                      <div className="col-lg-12">
                        <div className="delivery-details col-lg-12">
                          <ul className="product-detail-list mt-2">
                            <li>Free delivery inside Kathmandu</li>
                            <li>Local Delivery available inside KTM</li>
                            <li>
                              Return within 3 days (change of mind will not be
                              applicable)
                            </li>
                            <li>All our deliveries are climate conscious</li>
                            <li>Estimated delivery: 2 to 5 days</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 ms-5 mt-5">
                  <AdminMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
