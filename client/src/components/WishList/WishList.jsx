import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import Cookies from "js-cookie";
import "./WishList.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function WishList() {
  const token = Cookies.get("Auth");
  const [modal, setModal] = useState(false);
  const [allwishlist, setallwishlist] = useState([]);
  const history = useHistory();

  const user_id = localStorage.getItem("user_id");
  useEffect(() => {
    axios
      .get(`http://localhost:3001/wishlist/?user_id=${user_id}`)
      .then((response) => {
        console.log(response);
        setallwishlist(response.data);

        if ((response.data = [])) {
          console.log("Your wishlist is empty");
        }
      });
  }, []);

  const listitems = allwishlist.map((value) => (
    <div className="col-lg-3 mb-5  allproduct">
      <div className="col-lg-12 ">
        <FaTimes
          fontSize="1.32em"
          className="float-end me-5"
          onClick={() => {
            deleteWishlist(value.id);
          }}
        />
      </div>
      <div>
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
      <div className="allproduct_detail mt-3">
        <p className="card-title">{value.brand}</p>
        <div>
          <p className="card-text col-lg-10 mb-3">{value.product_name}</p>
        </div>
        <p className="card-text col-lg-12 float-start mb-3">Rs {value.price}</p>
      </div>
    </div>
  ));

  const deleteWishlist = async (id) => {
    await axios
      .delete(`http://localhost:3001/wishlist/${id}`)
      .then((response) => {
        if (response.data.message) {
          window.location.reload(false);
        }
      });
  };

  const RenderWishlist = () => {
    if (token) {
      return (
        <>
          <div className="isloggedinwishlist">
            <div className="col-lg-12 text-center mb-5 mt-3">
              <h1 className="me-4">Wishlist</h1>
            </div>
            <div className="container wishlistscontainer">
              <div className="col-lg-12 ">
                <div className="row">{listitems}</div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="row isnotloggedinwishlist">
            <div className="col-lg-12 text-center mt-5">
              <h1 className="wishlist-title">WISHLIST</h1>
            </div>
            <div className="col-lg-12 text-center">
              <p className="wishlist-paragraph">
                Looking for your wishlist? Sign in to pick up where you left
                off.
              </p>
            </div>
            <div className="col-lg-12 text-center">
              <button
                onClick={() => setModal(true)}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="wishlist-login col-lg-3"
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
  return (
    <div className="container">
      <div className="col-lg-12">
        <RenderWishlist />
      </div>
    </div>
  );
}

export default WishList;
