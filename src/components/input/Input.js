import React from 'react';

const Input = ({ id, type, error, value, onChange }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      className={`${error} ? 'error : ''`}
      onChange={onChange}
    />
  );
};

export default Input;
