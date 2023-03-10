import React, { useEffect, useRef } from 'react';

const token = 1234;

export default function RefDemo() {
  const value = useRef('');
  const inputParent = useRef(null);
  useEffect(() => {
    inputParent.current.childNodes[0].focus();
  }, []);
  const handleInput = (e) => {
    value.current += e.target.value;
    if (value.current.length < 4) {
      inputParent.current.childNodes[value.current.length].focus();
    } else {
      inputParent.current.childNodes[value.current.length].focus();
    }
  };
  const handleFocus = (e) => {
    const length = value.current.length;
    if (length === 4) {
      inputParent.current.childNodes[3].focus();
    } else {
      inputParent.current.childNodes[length].focus();
    }
  };

  return (
    <div className="otp-example" ref={inputParent}>
      <input />
      <input />
      <input />
      <input />
    </div>
  );
}
