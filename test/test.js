const mycode = require('../index'),
    assert = require('assert');


describe('MyReverse', function() {
    describe('bla', function() {
        it('should return alb when using bla as input', function() {
            assert.equal("alb", mycode.reverse("bla"));
        });
    });
});



