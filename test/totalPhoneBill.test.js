let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should return correct total bill for data provided 2calls and 3sms', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return correct total bill for data provided call and sms', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });
});