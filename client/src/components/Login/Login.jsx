import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { GrClose } from "react-icons/gr";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

var CryptoJS = require("crypto-js");

function Login(props) {
  const history = useHistory();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  //registering user to database
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [registerStatus, setRegisterStatus] = useState("");

  const addUser = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      phone: phone,
    };
    if ((!email, !password, !name, !phone)) {
      setRegisterStatus("Please,fill all crendentials");
    } else {
      let validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
      if (email) {
        if (!validEmailRegex.test(email)) {
          setRegisterStatus("Proper email address is expected");
        }
      } else {
        await Axios.post("http://localhost:3001/user/sign-up", data).then(
          (response) => {
            if (response.data.message) {
              setRegisterStatus(response.data.message);
            }
          }
        );
      }
    }
  };

  //login
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [token, setToken] = useState();

  const login = async () => {
    const data = {
      email: emailLogin,
      password: passwordLogin,
    };

    validate();
    await Axios.post("http://localhost:3001/user/login", data).then(
      (response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
          setToken(response.data.token);

          if (response.data.success) {
            Cookies.set("Auth", CryptoJS.AES.encrypt(token, "authToken"), {
              expires: 1,
            });

            localStorage.setItem("user", response.data.user);
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("user_id", response.data.user_id);
            localStorage.setItem("phone", response.data.phone);
            props.setTrigger(false);
            toast("Login sucessful");
            history.push("/");
          }
        }
      }
    );
  };

  const validate = () => {
    if ((!emailLogin, !passwordLogin)) {
      setLoginStatus("Please,fill all crendentials");
    }

    //email regex
    let validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (emailLogin) {
      if (!validEmailRegex.test(emailLogin)) {
        setLoginStatus("Proper email address is expected");
      }
    }
  };

  return props.trigger ? (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div className=" ms-2">
                <div className="row">
                  <div className="col col-lg-12  mx-auto">
                    <div className="row mt-3">
                      <div className="col-lg-9 title ">
                        <p className="float-start head">Come on in</p>
                      </div>
                      <div className="col-lg-3">
                        <button className="close" data-bs-dismiss="modal">
                          <GrClose />
                        </button>
                      </div>
                    </div>

                    <div className="row mt-3">
                      <div className="col-lg-12">
                        <div className="container ">
                          <div className="tabs col-lg-12">
                            <div
                              className={
                                toggleState === 1 ? "tab active-tab" : "tab"
                              }
                              onClick={() => toggleTab(1)}
                            >
                              SIGN IN
                            </div>
                            &nbsp;
                            <div
                              className={
                                toggleState === 2 ? "tab active-tab" : "tab"
                              }
                              onClick={() => toggleTab(2)}
                            >
                              I'M NEW HERE
                            </div>
                          </div>
                          <div className="content-tabs">
                            <div
                              className={
                                toggleState === 1
                                  ? "content active-content"
                                  : "content"
                              }
                            >
                              <div className="mb-3 mt-3">
                                <label className="form-label">
                                  Email address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  onChange={(event) => {
                                    setEmailLogin(event.target.value);
                                  }}
                                />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="exampleFormControlInput1"
                                  onChange={(event) => {
                                    setPasswordLogin(event.target.value);
                                  }}
                                />
                              </div>

                              <div
                                className="forgot-password col-lg-6 
            "
                              >
                                <p>Forgot your password ?</p>
                              </div>
                              <div className=" col-lg-12">
                                <button
                                  className="col-lg-12 signin-button "
                                  onClick={login}
                                >
                                  Log in
                                </button>
                              </div>
                              <span className="col-lg-12 mt-3">
                                {loginStatus}
                              </span>
                              <div className=" col-lg-12 mt-3 mb-5">
                                <p
                                  className="register"
                                  onClick={() => toggleTab(2)}
                                >
                                  New to Sickfits? Register
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* register start */}
                          <div
                            className={
                              toggleState === 2
                                ? "content active-content"
                                : "content"
                            }
                          >
                            <div className="mb-3 mt-3 form">
                              <label className="form-label">Name</label>
                              <input
                                type="text"
                                className="form-control"
                                onChange={(event) => {
                                  setName(event.target.value);
                                }}
                              />
                            </div>
                            <div className="mb-3 form ">
                              <label className="form-label">
                                Email address
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                onChange={(event) => {
                                  setEmail(event.target.value);
                                }}
                              />
                            </div>
                            <div className="mb-3 form">
                              <label className="form-label">Password</label>
                              <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                onChange={(event) => {
                                  setPassword(event.target.value);
                                }}
                              />
                            </div>
                            <div className="mb-3 form">
                              <label className="form-label">Phone Number</label>
                              <input
                                type="number"
                                className="form-control"
                                id="exampleFormControlInput1"
                                onChange={(event) => {
                                  setPhone(parseInt(event.target.value));
                                }}
                              />
                            </div>

                            <div className=" col-lg-12 mb-5 ">
                              <button
                                onClick={addUser}
                                className="col-lg-12 mt-3  signin-button links text-center"
                              >
                                Register
                              </button>

                              <span className="col-lg-12 mt-5">
                                {registerStatus}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Login;
