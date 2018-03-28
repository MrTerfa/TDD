const assert = require('chai').assert;
const app = require('../app');

let sayHelloResult = app.sayHello();
let addNumberResult = app.addNumbers(5,5);
let toCapital = app.toCapital('string');

describe('App', function(){
    it('SayHello should return hello', function(){
        assert.equal(sayHelloResult, 'Hello');
    });

    it('sayHello should return type string', function(){
        let result = app.sayHello();
        assert.typeOf(sayHelloResult,'string');
    });

    it('addNumbers should be above 5', function(){
        assert.isAbove(addNumberResult,5);
    });

    it('addNumbers should return type number', function(){
        assert.typeOf(addNumberResult,'number');
    });
    
    it('toCapital should return',function(){
        assert.equal(toCapital,'STRING');
    })
});