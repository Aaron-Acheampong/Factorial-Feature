var assert = require("assert");
const { isTypedArray } = require("util/types");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
     it('returns correct value of 5!', () => {
         //setup
         const input = 5;
         const expected = 120;

         //exercise
         const result = Calculate.factorial(input);

         //verify
         assert.equal(result, expected);

     }); 


     it('returns correct value of 3!', () => {
        //setup
        const input = 3;
        const expected = 6;

        //exercise
        const result = Calculate.factorial(input);

        //verify
        assert.equal(result, expected);
     });  
     
     
     t('returns correct value of 0!', () => {
        //setup
        const input = 0;
        const expected = 1;

        //exercise
        const result = Calculate.factorial(input);

        //verify
        assert.equal(result, expected);
     });  
  });
});