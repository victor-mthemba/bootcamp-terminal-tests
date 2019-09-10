let assert = require("assert");
let  mostProfitableDepartment= require("../mostProfitableDepartment");

describe('The mostProfitableDepartment function', function(){

    it('should return the most Profitable Department', function(){
        assert.deepEqual("hardware", mostProfitableDepartment([{"department":"hardware","sales":4500,"day":"Monday"},{"department":"outdoor","sales":1500,"day":"Monday"}]));
    });
   
});