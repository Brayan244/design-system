'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var emotion = require('emotion');
var PropTypes = _interopDefault(require('prop-types'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :hover {\n    color: blue;\n  }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var hover = emotion.css(_templateObject());

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", ";\n    margin-left: 50px;\n    color: white;\n  "]);
  _templateObject2 = function _templateObject2() {
    return data;
  };
  return data;
}
function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    height: 100px;\n    width: 100px;\n    border: 5px solid black;\n    ", ";\n    background-color: #0000ff;\n    border-color: ", ";\n  "]);
  _templateObject$1 = function _templateObject() {
    return data;
  };
  return data;
}
var propTypes = {
  important: PropTypes.bool.isRequired
};
var Test = function Test(_ref) {
  var _ref$important = _ref.important,
      important = _ref$important === void 0 ? true : _ref$important;
  var testStyle = emotion.css(_templateObject$1(), hover, important ? 'red' : 'white');
  var overwrite = emotion.css(_templateObject2(), testStyle);
  return React.createElement("div", {
    className: testStyle
  }, "hola, c\xF3mo est\xE1s?", React.createElement("p", {
    className: overwrite
  }, "overwritten"));
};
Test.propTypes = propTypes;

exports.Test = Test;