/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    console.log('input: ', input);
    if (input.search(/\/.*\//) !== -1) {
      const e = new Error('invalid number');
      //console.error(e);
      return e;
    }

    const numeric = input.match(/^\d*\.?\d+(\/?\d*\.?\d+)?/);
    
    if (!numeric) return 1;
    
    const numArr = numeric[0]
      .split('/')
      .map(str => Number(str));
    const result = numArr.reduce((acc, cur) => acc / cur);
    
    console.log('result: ', result);
    return result;
  };
  
  this.getUnit = function(input) {
    console.log('input: ', input);
    const letters = input.match(/[A-Za-z]+$/)
    console.log('letters: ', letters);
    
    
    if (input.search(/[a-z]\d/) !== -1) {
      const e = new Error('invalid unit');
      //console.error(e);
      return e;
    }
    
    var result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
