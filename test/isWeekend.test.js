let assert = require("assert");
let isWeekend = require("../isWeekend");

describe('The isWeekend function', function(){

    it('should return false if the  is a weekend day', function(){
        assert.equal(false, isWeekend('Sunday'));
    });
    it('should return true if day is not a weendend day', function(){
        assert.equal(true, isWeekend('Monday'));
    });
});