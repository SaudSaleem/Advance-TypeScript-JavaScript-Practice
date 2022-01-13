const bankInfoModel = require("../models").bankInfo;
// / add/post new user in user tablez
const addUserBankInfo = async (req, res) => {
      const _bankInfo = await bankInfoModel.create({
        bankName: req.body.bankName,
        accountNo: req.body.accountNo,
        userId: req.body.userId,
      });
      res.status(201).send(_bankInfo);
};
//get bank details
const getBankInfo = async (req, res) => {
      const _bankInfo = await bankInfoModel.findAll();
      res.status(200).send(_bankInfo);
};

module.exports = {
    addUserBankInfo,
    getBankInfo
  };
  