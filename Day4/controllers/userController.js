const usersModel = require("../models").User;
const bankInfoModel = require("../models").bankInfo;
//import logger class for emitting and listeing to events
const Logger = require("../logger")
const logger = new Logger();

//import JOI module for input validation
const Joi = require("joi");
//method to validate user input
function validateUser(user) {
  const schema = {
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.required(),
    password: Joi.string()
  };
  const result = Joi.validate(user, schema);
  return result;
}

 //return all users with bank account details
const getUsersBankInformation = async (req, res) => {
  let users = await usersModel.findAll({ include: bankInfoModel });
  res.status(200).send(users);
};

//return all users
const getAllUsers = async (req, res) => {
  let users = await usersModel.findAll();
  res.status(200).send(users);
};

//return only one user based on given "ID"
const getUserById = async (req, res) => {
  let user = await usersModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (!user) res.status(404).send("User with given id is not found!");
  else res.status(200).send(user);
};

// add/post new user in user tablez
const addUser = async (req, res) => {
  //input validation for post data
  const result = validateUser(req.body);

  //if validation failed
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  } else {
    try {
      const addedUser = await usersModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      });
      res.status(201).send(addedUser);
      //raise an event that user is created and console the data of newly created user
      logger.on('userCreated',(arg) => {
        console.log(arg)
      })
      logger.log(`LISTNER CALLED AND NEW USER IS CREATED`)
      
    } catch (e) {
      if (e.name === "SequelizeValidationError") {
        return res.status(400).json({
          success: false,
          msg: e.errors.map((err) => err.message),
        });
      } else if (!e.status) {
        res
          .status(500)
          .json({
            error: {
              code: "UNKNOWN_ERROR",
              message: "An unknown error occurred.",
            },
          });
      } else {
        res
          .status(e.status)
          .json({ error: { code: e.code, message: e.message } });
      }
    }
  }
};

// update user in user table
const updateUser = async (req, res) => {
  //check if user exist
  let user = await usersModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (user.length <= 0) {
    res.status(404).send("User with given id is not found!");
    return;
  }

  //input validation for update data
  const result = validateUser(req.body);
  //if validation failed
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
  } else {
    const updatedUser = await usersModel.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).send(updatedUser);
  }
};

// delete user from user table
const deleteUser = async (req, res) => {
  //check if user exist
  let user = await usersModel.findAll({
    where: {
      id: req.params.id,
    },
  });
  if (user.length <= 0) {
    res.status(404).send("User with given id is not found!");
    return;
  }
  const deletedUser = await usersModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send("user deleted");
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  getUsersBankInformation
};
