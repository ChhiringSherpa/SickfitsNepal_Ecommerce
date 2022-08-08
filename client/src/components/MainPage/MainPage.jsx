import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import { useHistory } from "react-router-dom";

function MainPage() {
  //stating states to change state of the state
  const [toggleState, setToggleState] = useState(false);
  const [toggleColors, setToggleColors] = useState(false);
  const [toggleSortBy, setToggleSortBy] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [categoryToggle, setCategoryToggle] = useState("");
  const [colorToggle, setcolorToggle] = useState("");
  const [fixed, setfixed] = useState(" col-lg-2 selector me-5 fixed-top");

  const history = useHistory();
  const listenScrollEvent = () => {
    if (window.scrollY > 400) {
      setfixed("col-lg-2 selector ");
    }
  };

  useEffect(() => {
    listenScrollEvent();

    console.log(categoryToggle);
    axios
      .get(
        `http://localhost:3001/posts/men?category=${categoryToggle}&color=${colorToggle}`
      )
      .then((response) => {
        console.log(response);
        setAllProducts(response.data);
      });
  }, [categoryToggle, colorToggle]);

  //fetching all the products from the backend and mapping it in lisitems
  const listitems = allProducts.map((value) => (
    <div className="col-lg-4 mb-5   allproduct">
      <div>
        <img
          src={`http://localhost:3001/${value.image1}`}
          className="image"
          width="85%"
          alt="..."
          onClick={() => {
            history.push(`/products/${value.id}`);
            console.log(value.image1);
          }}
        />
      </div>
      <div className="allproduct_detail mt-3">
        <p className="card-title">{value.brand}</p>
        <p className="card-text col-lg-12">{value.product_name}</p>
        <p className="card-text col-lg-12 float-start">Rs {value.price}</p>
      </div>
    </div>
  ));

  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  const [toggle1, setToggle1] = useState(1);
  const toggleTab1 = (index) => {
    setToggle1(index);
  };

  return (
    <div className="container all ">
      <div className="row">
        {/* dropdown starts */}
        <div className={fixed}>
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
                    <li
                      className={
                        toggle === 1
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("");
                        toggleTab(1);
                      }}
                    >
                      <span
                        className={
                          toggle === 1 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(1)}
                      >
                        All
                      </span>
                    </li>
                    <li
                      className={
                        toggle === 2
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("jacket");
                        toggleTab(2);
                      }}
                    >
                      <span
                        className={
                          toggle === 2 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(2)}
                      >
                        Jackets
                      </span>
                    </li>
                    <li
                      className={
                        toggle === 3
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("hoodie");
                        toggleTab(3);
                      }}
                    >
                      <span
                        className={
                          toggle === 3 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(3)}
                      >
                        Hoodie
                      </span>
                    </li>
                    <li
                      className={
                        toggle === 4
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("pant");
                        toggleTab(4);
                      }}
                    >
                      <span
                        className={
                          toggle === 4 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(4)}
                      >
                        Pants
                      </span>
                    </li>
                    <li
                      className={
                        toggle === 5
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("shirt");
                        toggleTab(5);
                      }}
                    >
                      <span
                        className={
                          toggle === 5 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(5)}
                      >
                        Shirts
                      </span>
                    </li>

                    <li
                      className={
                        toggle === 6
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("short");
                        toggleTab(6);
                      }}
                    >
                      <span
                        className={
                          toggle === 6 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(6)}
                      >
                        Shorts
                      </span>
                    </li>
                    <li
                      className={
                        toggle === 7
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setCategoryToggle("tee");
                        toggleTab(6);
                      }}
                    >
                      <span
                        className={
                          toggle === 6 ? "clothing active-clothing" : "clothing"
                        }
                        onClick={() => toggleTab(7)}
                      >
                        Tee
                      </span>
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
                    <li
                      className={
                        toggle1 === 1
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setcolorToggle("");
                        toggleTab1(1);
                      }}
                    >
                      <span
                        className={
                          toggle1 === 1
                            ? "clothing active-clothing"
                            : "clothing"
                        }
                        onClick={() => {
                          toggleTab1(1);
                        }}
                      >
                        All
                      </span>
                    </li>
                    <li
                      className={
                        toggle1 === 2
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setcolorToggle("black");
                        toggleTab1(2);
                      }}
                    >
                      <span
                        className={
                          toggle1 === 2
                            ? "clothing active-clothing"
                            : "clothing"
                        }
                        onClick={() => {
                          toggleTab1(2);
                        }}
                      >
                        Black
                      </span>
                    </li>
                    <li
                      className={
                        toggle1 === 3
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setcolorToggle("white");
                        toggleTab1(3);
                      }}
                    >
                      <span
                        className={
                          toggle1 === 3
                            ? "clothing active-clothing"
                            : "clothing"
                        }
                        onClick={() => {
                          toggleTab1(3);
                        }}
                      >
                        White
                      </span>
                    </li>
                    <li
                      className={
                        toggle1 === 4
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setcolorToggle("blue");
                        toggleTab1(4);
                      }}
                    >
                      <span
                        className={
                          toggle1 === 4
                            ? "clothing active-clothing"
                            : "clothing"
                        }
                        onClick={() => {
                          toggleTab1(4);
                        }}
                      >
                        Blue
                      </span>
                    </li>
                    <li
                      className={
                        toggle1 === 5
                          ? "categories active-categories"
                          : "categories"
                      }
                      onClick={() => {
                        setcolorToggle("other");
                        toggleTab1(5);
                      }}
                    >
                      <span
                        className={
                          toggle1 === 5
                            ? "clothing active-clothing"
                            : "clothing"
                        }
                        onClick={() => {
                          toggleTab1(5);
                        }}
                      >
                        Other
                      </span>
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
            {/* sort column starts */}
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
            </div>
            {/* sort by column ends   */}
            {/** all products columns starts */}

            <div className="row">
              <div className="col mx auto">
                <div className="row products_list ms-5 ">{listitems}</div>
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
