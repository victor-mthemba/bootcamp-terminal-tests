let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should return 19 yearsAgo if the year is 2000', function(){
        assert.equal(19, yearsAgo(2000));
    });
    it('should return 1 yearAgo if the year is 2018', function(){
        
        assert.equal(1, yearsAgo(2018));
    });
});