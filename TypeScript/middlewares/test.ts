// middleware that is specific to the router
import { Request, Response, NextFunction } from "express";
const timeLog = (req:Request, res:Response, next:NextFunction) => {
    console.log('before timelog');   //pre
    console.log('Time: ', Date.now());
    next();
    console.log('after timelog');   //post
    return;
  };
  module.exports = {
    timeLog
  }