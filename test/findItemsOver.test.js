let assert = require("assert");
let  findItemsOver= require("../findItemsOver");

describe('The findItemOver function', function(){

    it('should return all the products that have a quantity higher than threshold.', function(){
        assert.deepEqual([{"name":"pears","qty":37},{"name":"bananas","qty":27}], findItemsOver([{"name":"pears","qty":37},{"name":"bananas","qty":27}], '20'));
    });
});