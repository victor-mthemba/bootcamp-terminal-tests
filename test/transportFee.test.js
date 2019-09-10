let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){

    it('should return R20 if it is a morning shift ', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('should return R10 if it is a afternoon shift', function(){
        
        assert.equal('R10', transportFee('afternoon'));
    });
    it('should return free if it is not a afternoon shift or morning', function(){
        
        assert.equal('free', transportFee('night'));
    });

});