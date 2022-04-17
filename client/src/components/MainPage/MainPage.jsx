import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import { HiOutlineHeart } from "react-icons/hi";
function MainPage() {
  const [toggleState, setToggleState] = useState(false);
  const [toggleColors, setToggleColors] = useState(false);
  const [toggleSortBy, setToggleSortBy] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
      setAllProducts(response.data);
    });
  }, []);

  return (
    <div className="container all ">
      <div className="row">
        {/* dropdown starts */}
        <div className="col-lg-3">
          <div className="row">
            <div className="main-title col-lg-12 mb-3 mt-3">
              <h6>Filter</h6>
            </div>
            <div className="col-lg-12">
              <div
                className="link-item"
                onClick={() => setToggleState(!toggleState)}
              >
                <div className="row">
                  <div className="col-lg-10">
                    <h6
                      className={
                        toggleState === true
                          ? "link-title active-link-title"
                          : "link-title"
                      }
                    >
                      Category
                    </h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosArrowUp
                      fontSize="1.2em"
                      className={
                        toggleState === true ? "cursor active-cursor" : "cursor"
                      }
                    />
                  </div>
                </div>
                <hr
                  className={
                    toggleState === true
                      ? "category-border active-category-border"
                      : "category-border"
                  }
                ></hr>
              </div>

              <div className="item-list">
                <div
                  className={
                    toggleState === true
                      ? "category-list active-category-list"
                      : "category-list"
                  }
                >
                  <ul className="category-items">
                    <li className="categories">
                      <a className="clothing">Jackets</a>
                    </li>
                    <li className="categories">
                      <a className="clothing">Pants</a>
                    </li>
                    <li className="categories">
                      <a className="clothing">Shirts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* starts */}
            <div className="col-lg-12">
              <div
                className="link-item"
                onClick={() => setToggleColors(!toggleColors)}
              >
                <div className="row">
                  <div className="col-lg-10">
                    <h6
                      className={
                        toggleColors === true
                          ? "link-title active-link-title"
                          : "link-title"
                      }
                    >
                      Colors
                    </h6>
                  </div>
                  <div className="col-lg-2">
                    <IoIosArrowUp
                      fontSize="1.2em"
                      className={
                        toggleColors === true
                          ? "cursor active-cursor"
                          : "cursor"
                      }
                    />
                  </div>
                </div>
                <hr
                  className={
                    toggleColors === true
                      ? "category-border active-category-border"
                      : "category-border"
                  }
                ></hr>
              </div>

              <div className="item-list">
                <div
                  className={
                    toggleColors === true
                      ? "category-list active-category-list"
                      : "category-list"
                  }
                >
                  <ul className="category-items">
                    <li className="categories">
                      <a className="clothing">Black</a>
                    </li>
                    <li className="categories">
                      <a className="clothing">White</a>
                    </li>
                    <li className="categories">
                      <a className="clothing">Blue</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* dropdown ends */}
        {/* product list starts */}
        <div className="col-lg-9 products">
          <div className="row">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-lg-3 mt-1 sort-by float-end">
                  <div
                    className="link-item"
                    onClick={() => setToggleSortBy(!toggleSortBy)}
                  >
                    <div className="row">
                      <div className="col-lg-6 sort-title">
                        <h6
                          className={
                            toggleSortBy === true
                              ? "sortby-title active-sortby-title"
                              : "sortby-title"
                          }
                        >
                          Sort by
                        </h6>
                      </div>
                      <div className="col-lg-1 icon">
                        <IoIosArrowUp
                          fontSize="1.2em"
                          className={
                            toggleSortBy === true
                              ? "cursorsort active-cursorsort"
                              : "cursorsort"
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="item-list">
                    <div
                      className={
                        toggleSortBy === true
                          ? "category-list active-category-list"
                          : "category-list"
                      }
                    >
                      <ul className="sort-box">
                        <li className="sort-items">
                          <a className="sort-item">Our pick</a>
                        </li>
                        <li className="sort-items">
                          <a className="sort-item">New In</a>
                        </li>
                        <li className="sort-items">
                          <a className="sort-item">Price: low to high</a>
                        </li>
                        <li className="sort-items">
                          <a className="sort-item">Price: high to low</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* sort by column ends   */}
              <div className="col">
                {allProducts.map((value, key) => {
                  return (
                    <div class="col-lg-3">
                      {/**<img src="..." class="card-img-top" alt="...">*/}
                      <button>
                        <HiOutlineHeart />
                      </button>
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">{value.product_name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* product list ends */}
      </div>
    </div>
  );
}

export default MainPage;
