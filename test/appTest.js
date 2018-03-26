const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
    it('SayHello should return hello', function(){
        let result = app.sayHello();
        assert.equal(result, 'Hello');
    });

    it('sayHello should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(result,'string');
    });

    it('addNumbers should be above 5', function(){
        let result = app.addNumbers(5,5);
        assert.isAbove(result,5);
    });

    it('addNumbers should return type number', function(){
        let result = app.addNumbers(5,5);
        assert.typeOf(result,'number');
    });
});