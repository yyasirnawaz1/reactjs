import React, { useState } from 'react';

const TextBoxControl = props => {
  const [inp, setInp] = useState('');
  const handleTextChange = element => {
    var val = element.target.value;
    setInp(val);
  };
  return (
    <React.Fragment>
      <input
        type='text'
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        value={inp}
        onChange={handleTextChange}
      ></input>{' '}
      <br />
      <br />
      <button type='button' value='' onClick={() => props.updateCounter(inp)}>
        update Counter
      </button>
      <br />
    </React.Fragment>
  );
};

export default TextBoxControl;
