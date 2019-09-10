let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return true if regNumber is from bellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('should return false if regNumber is not from bellville', function(){
        assert.equal(false, isFromBellville('CJ 123'));
    });
});