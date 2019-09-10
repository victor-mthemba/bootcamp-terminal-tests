let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should return true if regNumber is for GP regPlates', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('should return false if regNumber is not for GP regPlates', function(){
        
        assert.equal(false, regCheck('DC 55 YU CL', 'GP'));
    });
});