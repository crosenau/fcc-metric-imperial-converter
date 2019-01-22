/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = (app) => {
  
  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      
      if (initNum instanceof Error && initUnit instanceof Error) {
        res.send('invalid number and unit');
      } else if (initNum instanceof Error) {
        res.send(initNum.message);
      } else if (initUnit instanceof Error) {
        res.send(initUnit.message);
      }
    
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString
      });
    });
};
