let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should return Bellville if regNumber starts with CY', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('should return Paarl if regNumber starts with CJ', function(){
        assert.equal('Paarl', fromWhere('CJ'));
    });
    it('should return Cape Town if regNumber starts with CA', function(){
        assert.equal('Cape Town', fromWhere('CA'));
    });
    it('should return Some other place! if regNumber  does not starts with CA or CY or CJ', function(){
        assert.equal('Some other place!', fromWhere('CC'));
    });

   
});