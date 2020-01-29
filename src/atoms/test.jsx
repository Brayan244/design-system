import React from 'react';
import testStyle from './test.styles';

const Test = () => (
  <div className={testStyle}>
    <p>hola, soy un componente de prueba</p>
    <p>
      pon tu mouse sobre mi
      <span role="img" aria-label="eyes">
        &nbsp;👀
      </span>
    </p>
  </div>
);

export default Test;
