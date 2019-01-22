/*
*
*
*       Complete the handler logic below
*       
*       
*/

class ConvertHandler {
  constructor() {
    this.units = [
      { symbol: 'gal', name: 'gallons',    convertsTo: 'L',   convert: (input) => input * 3.78541,  },
      { symbol: 'L',   name: 'liters',     convertsTo: 'gal', convert: (input) => input / 3.78541,  },
      { symbol: 'mi',  name: 'miles',      convertsTo: 'km' , convert: (input) => input * 1.60934,  },
      { symbol: 'km',  name: 'kilometers', convertsTo: 'mi' , convert: (input) => input / 1.60934,  },
      { symbol: 'lbs', name: 'pounds',     convertsTo: 'kg' , convert: (input) => input * 0.453592, },
      { symbol: 'kg',  name: 'kilograms',  convertsTo: 'lbs', convert: (input) => input / 0.453592, }
    ];
  }
  
  getNum(input) {
    // Catch double fractions
    if (input.search(/\/.*\//) !== -1) return new Error('invalid number');

    const numericMatch = input.match(/^\d*\.?\d+(\/?\d*\.?\d+)?/);
    
    if (!numericMatch) return 1;
    
    const numArr = numericMatch[0]
      .split('/')
      .map(str => Number(str));
    const result = numArr.reduce((acc, cur) => acc / cur);
    
    return result;
  };
  
  getUnit(input) {
    const letterMatch = input.match(/[A-Za-z]+$/);
    const error = new Error('invalid unit');
    
    if (!letterMatch) return error;
    
    const unitMatch = this.units.filter(unitObj => unitObj.symbol.toLowerCase() === letterMatch[0].toLowerCase());
    
    if (unitMatch.length === 0) return error;
    
    return unitMatch[0].symbol;
  };
  
  getReturnUnit(initUnit) {
    for (let unit of this.units) {
      if (unit.symbol.toLowerCase() === initUnit.toLowerCase()) {
        return unit.convertsTo;
      }
    }
  };

  spellOutUnit(inputUnit) {
    for (let unit of this.units) {
      if (unit.symbol.toLowerCase() === inputUnit.toLowerCase()) {
        return unit.name;
      }
    }
  };
  
  convert(initNum, initUnit) {
    for (let unit of this.units) {
      if (unit.symbol.toLowerCase() === initUnit.toLowerCase()) {
        return Number(unit.convert(initNum).toFixed(5));
      }
    }
  };
  
  getString(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
