import React from 'react';
import { css } from 'emotion';

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
  var data = _taggedTemplateLiteral(["\n  background-color: #ff0000;\n  margin: auto;\n  text-align: center;\n  color: #0000ff;\n\n  :hover {\n    color: #ffffff;\n  }\n"]);
  _templateObject = function _templateObject() {
    return data;
  };
  return data;
}
var testStyle = css(_templateObject());

var Test = function Test() {
  return React.createElement("div", {
    className: testStyle
  }, React.createElement("p", null, "hola, soy un componente de prueba"), React.createElement("p", null, "pon tu mouse sobre mi", React.createElement("span", {
    role: "img",
    "aria-label": "eyes"
  }, "\xA0\uD83D\uDC40")));
};

export { Test };
