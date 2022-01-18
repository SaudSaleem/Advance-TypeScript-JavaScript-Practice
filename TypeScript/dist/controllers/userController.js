"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var process = require('process');
let _path = process.cwd();
const usersModel = require(_path + "/models").User;
const Logger = require(_path + "/logger");
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
//return all users
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield usersModel.findAll();
        res.status(200).send(users);
    }
    catch (error) {
        console.log("error", error);
        res.status(400).json({ error: error.toString() });
    }
});
//return only one user based on given "ID"
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield usersModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        if (!user)
            res.status(404).send("User with given id is not found!");
        else
            res.status(200).send(user);
    }
    catch (error) {
        console.log("error", error);
        res.status(400).json({ error: error.toString() });
    }
});
// add/post new user in user tablez
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //input validation for post data
    const result = validateUser(req.body);
    //if validation failed
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
    }
    else {
        try {
            const addedUser = yield usersModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            });
            res.status(201).send(addedUser);
            //raise an event that user is created and console the data of newly created user
            logger.on('userCreated', (arg) => {
                console.log(arg);
            });
            logger.log(`LISTNER CALLED AND NEW USER IS CREATED`);
        }
        catch (e) {
            if (e.name === "SequelizeValidationError") {
                return res.status(400).json({
                    success: false,
                    msg: e.errors.map((err) => err.message),
                });
            }
            else if (!e.status) {
                res
                    .status(500)
                    .json({
                    error: {
                        code: "UNKNOWN_ERROR",
                        message: "An unknown error occurred.",
                    },
                });
            }
            else {
                res
                    .status(e.status)
                    .json({ error: { code: e.code, message: e.message } });
            }
        }
    }
});
// update user in user table
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //check if user exist
    let user = yield usersModel.findAll({
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
    }
    else {
        const updatedUser = yield usersModel.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }, {
            where: {
                id: req.params.id,
            },
        });
        res.status(201).send(updatedUser);
    }
});
// delete user from user table
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //check if user exist
    let user = yield usersModel.findAll({
        where: {
            id: req.params.id,
        },
    });
    if (user.length <= 0) {
        res.status(404).send("User with given id is not found!");
        return;
    }
    const deletedUser = yield usersModel.destroy({
        where: {
            id: req.params.id,
        },
    });
    res.status(200).send("user deleted");
});
module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
};
