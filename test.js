(function(){
  'use strict';
  // const expect = require('expect.js');
  const expect = require('chai').expect; 

  const getPrimes = require('./app/getPrime.js');

  describe("Test cases for getPrimes function",function() {
      it("should return 'negative integers can not be prime' for negative integers",function() {
        expect(getPrimes(-23)).to.equal("negative integers can not be prime");
      });

      it("should return an empty array if argument is equal to 1",function(){
        expect(getPrimes(1)).to.equal("1 is not a prime number");
      });

      it("should return 0 is not prime when passed 0",function() {
        expect(getPrimes(0)).to.equal("0 is not prime");
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] if argument is equal to 29",function(){
        expect(getPrimes(29)).to.deep.equal([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
      });

      it("should return an [2,3] if the argument passed is equal to 4",function(){
        expect(getPrimes(4)).to.deep.equal([ 2, 3 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11 ] if the argument passed is equal to 12",function(){
        expect(getPrimes(12)).to.eql([ 2, 3, 5, 7, 11 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11, 13, 17, 19 ] if the argument passed is equal to 20",function(){
        expect(getPrimes(12)).to.eql([ 2, 3, 5, 7, 11 ]);
      });

      it("should return the equivalent of getPrimes(29) if the argument passed is equal to getPrimes(30)",function(){
        expect(getPrimes(30)).to.eql(getPrimes(29));
      });

      it("should return an [ 2 ] if the argument passed is equal to 2",function(){
        expect(getPrimes(2)).to.eql([ 2 ]);
      });

      it("should return an [ 2, 3 ] if the argument passed is equal to 3",function(){
        expect(getPrimes(3)).to.eql([ 2, 3 ]);
      });

      
    
  });
})();