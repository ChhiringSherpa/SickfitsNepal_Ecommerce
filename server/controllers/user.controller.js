const models = require("../../qq/models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Validator = require("fastest-validator");
//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
async function signUp(req, res) {
  //Sign up
  await models.User.findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.send({ message: "Email already exists!" });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const user = {
              name: req.body.name,
              email: req.body.email,
              password: hash,
              phone: req.body.phone,
            };

            const schema = {
              name: { type: "string", optional: false, max: "100" },
              email: { type: "string", optional: false, max: "500" },
              password: { type: "string", optional: false },
              phone: { type: "number", optional: false },
            };

            const v = new Validator();
            const validationResponse = v.validate(user, schema);
            if (validationResponse !== true) {
              return res.send({
                message: "Validation failed",
                errors: validationResponse,
              });
            }

            models.User.create(user)
              .then((result) => {
                res.send({
                  message: "User created successfully",
                });
              })
              .catch((error) => {
                res.send({
                  message: "Something went wrong!",
                });
              });
          });
        });
      }
    })
    .catch((error) => {
      res.send({
        message: "Something went wrong!",
      });
    });
}

async function login(req, res) {
  await models.User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.send({
          success: false,
          message: "Invalid credentials!",
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  userName: user.name,
                  userId: user.id,
                },
                process.env.JWT_KEY,
                function (err, token) {
                  res.send({
                    success: true,
                    message: "Authentication successful!",
                    token: token,
                  });
                }
              );
            } else {
              res.send({
                success: false,
                message: "Invalid credentials!",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      res.send({
        success: false,
        message: "Something went wrong!",
      });
    });
}
function showUser(req, res) {
  const id = req.params.id;
  models.User.findByPk(id)
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: "Post not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}
module.exports = {
  signUp: signUp,
  login: login,
  showUser: showUser,
};
