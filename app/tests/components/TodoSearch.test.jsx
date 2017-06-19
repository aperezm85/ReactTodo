var expect = require ('expect');
var React = require ('react');
var ReactDOM = require ('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input text', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(todoSearch));
        var searchText = 'Dog';

        todoSearch.refs.searchText.value = searchText;

        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, searchText);
    });
    
    it('should call onSearch with proper checked value', () => {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);
        var $el = $(ReactDOM.findDOMNode(todoSearch));
        var checkedValue = true;

        todoSearch.refs.showCompleted.checked = true;

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});
