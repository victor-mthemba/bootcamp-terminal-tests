let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20  function', function(){

    it('should return all the products that have a quantity higher than 20.', function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver20([{"name":"pears","qty":37},{"name":"bananas","qty":27}]));
    });
    
});