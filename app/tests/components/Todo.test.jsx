var expect = require ('expect');
var React = require ('react');
var ReactDOM = require ('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

});
