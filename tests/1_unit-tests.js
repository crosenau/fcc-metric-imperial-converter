/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  
  suite('Function convertHandler.getNum(input)', () => {
    
    test('Whole number input', (done) => {
      const input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });
    
    test('Decimal Input', (done) => {
      const input = '3.4mi';
      assert.equal(convertHandler.getNum(input), 3.4);
      done();
    });
    
    test('Fractional Input', (done) => {
      const input = '1/2gal';
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', (done) => {
      const input = '1.3/3.5L';
      assert.equal(convertHandler.getNum(input), 0.37142857142857144);
      done();
    });
    
    test('Invalid Input (double fraction)', (done) => {
      const input = ['1.3/5.4/1/2.3mi', '1/2/5gal'];
      input.forEach(val => {
        assert.instanceOf(convertHandler.getNum(val), Error);
      });
      done();
    });
    
    test('No Numerical Input', (done) => {
      const input = '';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      const expected =  ['gal','L','mi','km','lbs','kg','gal','L','mi','km','lbs','kg'];
      
      input.forEach((val, i) => {
        assert.equal(convertHandler.getUnit(val), expected[i]);
      });
      
      assert.equal(convertHandler.getUnit('45gal'), 'gal');
      assert.equal(convertHandler.getUnit('1.4L'), 'L');
      assert.equal(convertHandler.getUnit('2.4Mi'), 'mi');
      done();
    });
    
    test('Unknown Unit Input', (done) => {
      const invalidInputs = ['gall', 'migal', 'Ll', 'KmlBs', 'fdajk', 'gal45'];
      
      invalidInputs.forEach(val => {
        assert.instanceOf(convertHandler.getUnit(val), Error);
      });
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expected = ['L','gal','km','mi','kg','lbs'];
      
      input.forEach((val, i) => {
        assert.equal(convertHandler.getReturnUnit(val), expected[i]);
      });
      
      done();
    });
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      
      input.forEach((val, i) => {
        assert.equal(convertHandler.spellOutUnit(val), expect[i]); 
      });
      
      done();
    });
  });
  
  suite('Function convertHandler.convert(num, unit)', () => {
    
    test('Gal to L', (done) => {
      const input = [5, 'gal'];
      const expected = 18.9271;
      
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', (done) => {
      const input = [7.3, 'l'];
      const expected = 1.92846;
      
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Mi to Km', (done) => {
      const input = [3, 'mi'];
      const expected = 4.82802;
      
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Km to Mi', (done) => {
      const input = [5, 'km'];
      const expected = 3.10686;
      
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Lbs to Kg', (done) => {
      const input = [7, 'lbs'];
      const expected = 3.17514;
      
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Kg to Lbs', (done) => {
      const input = [9, 'kg'];
      const expected = 19.84162;
      
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
  });
});