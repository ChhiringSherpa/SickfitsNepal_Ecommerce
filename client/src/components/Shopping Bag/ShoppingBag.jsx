import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Login from "../Login/Login";
import "./ShoppingBag.css";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ShoppingBag() {
  const Rendershoppingbag = () => {
    if (token) {
      return (
        <>
          <div className="container billing ms-5">
            <div className="col-lg-12 text-center">
              <h1 className="titlebag">Shopping Bag</h1>
            </div>

            <div className="row">
              {shoppingbag}
              <div className="col-lg-2 mt-4 bill">
                <div className="col-lg-12 text-start">
                  <div>
                    <div className="col-lg-12 text-start">
                      <div className="col-lg-6 mt-3">Name</div>
                      <input
                        type="email"
                        class="form-control mt-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        value={name}
                      />
                    </div>

                    <div className="col-lg-12 text-start">
                      <div className="col-lg-6 mt-3">Delivery address</div>
                      <input
                        type="email"
                        class="form-control mt-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) => {
                          setAddress(event.target.value);
                        }}
                        value={address}
                      />
                    </div>

                    <div className="col-lg-12 text-start">
                      <div className="col-lg-6 mt-3">Phone</div>
                      <input
                        type="email"
                        class="form-control mt-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                        value={phone}
                      />
                    </div>
                    <div className="col-lg-12 text-start">
                      <div className="col-lg-6 mt-3"> Secondary Phone</div>
                      <input
                        type="email"
                        class="form-control mt-3"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(event) => {
                          setSecondary_phone(event.target.value);
                        }}
                        value={secondary_phone}
                      />
                    </div>
                    <button
                      type="button"
                      className="col-lg-12 mt-3 pt-2 pb-2 checkoutbtn"
                      onClick={() => {
                        addOrder();
                        addFromBag();
                      }}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="row isnotloggedinshoppingbag">
            <div className="col-lg-12 text-center mt-5">
              <h1 className="shoppingbag-title">Shopping Bag</h1>
            </div>
            <div className="col-lg-12 text-center">
              <p className="shoppingbag-paragraph">
                Your bag is empty
                <br />
                Log In or register to sync your bag to any device
              </p>
            </div>
            <div className="col-lg-12 text-center">
              <button
                onClick={() => setModal(true)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="shoppingbag-login col-lg-3"
              >
                Log In
              </button>
            </div>

            <Login trigger={modal} setTrigger={setModal} />
          </div>
        </>
      );
    }
  };
  const history = useHistory();
  const token = Cookies.get("Auth");
  const [modal, setModal] = useState(false);
  const [bag, setbag] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/bag/?user_id=${user_id}`)
      .then((response) => {
        setbag(response.data);
        console.log(bag);
      });
  }, []);

  const deleteBag = async (id) => {
    await axios
      .delete(`http://localhost:3001/wishlist/${id}`)
      .then((response) => {
        if (response.data.message) {
          window.location.reload(false);
        }
      });
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [secondary_phone, setSecondary_phone] = useState("");
  const [confirm_order, setConfirm_order] = useState("false");

  const addOrder = async () => {
    const data = {
      user_id: localStorage.getItem("user_id"),
      name: name,
      address: address,
      phone: phone,
      secondary_phone: secondary_phone,
    };

    console.log(data);
  };

  const addFromBag = async () => {
    const data = {
      confirmed_order: true,
      user_id: localStorage.getItem("user_id"),
    };

    if ((!name, !address, !phone)) {
      alert("Fill the billing details!");
    } else {
      setConfirm_order("true");

      await axios
        .post("http://localhost:3001/bag/update", data)
        .then((response) => {
          if (response.data.message) {
            window.location.reload();
          }
        });
    }
  };

  const shoppingbag = bag.map((value) => (
    <div className="col-lg-8 mb-5 mt-5 me-5 allproduct">
      <div className="col-lg-12">
        <div className="row ">
          <div className="col-lg-4">Sending from Boudha, KTM</div>
          <div className="col-lg-8">
            <div className="col-lg-12 text-end">
              Delivery inside KTM only for the time being
            </div>
          </div>
        </div>

        <div className="row">
          <hr className="col-lg-12 mt-3" />
        </div>
      </div>

      <div className="col-lg-12 ">
        <FaTimes fontSize="1.32em" className="float-end ms-5 deletebtn" />
      </div>

      <div className="row mt-3">
        <div className="col-lg-3">
          <img
            src={`http://localhost:3001/${value.image}`}
            className="image "
            width="70%"
            alt="..."
            onClick={() => {
              history.push(`/products/${value.product_id}`);
            }}
          />
        </div>
        <div className="col-lg-4">
          <div className="allproduct_detail">
            <p className="card-title">{value.brand}</p>
            <p className="card-text col-lg-10 mb-3">{value.product_name}</p>
          </div>
        </div>

        <div className="col-lg-3">
          <h5>Price</h5>
          <p className="card-text col-lg-12 float-start mb-3">
            Rs {value.price}
          </p>
        </div>
        <div className="col-lg-2">
          <div>
            <h5>Size</h5>
            <p className="card-text">{value.size}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="col-lg-12 mt-5">
        <Rendershoppingbag />
      </div>
    </div>
  );
}

export default ShoppingBag;
