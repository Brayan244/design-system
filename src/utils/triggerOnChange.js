const triggerOnChange = (targetRef, value) => {
  const input = targetRef.current;
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set;
  const inputEvent = new Event('change', { bubbles: true });

  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(inputEvent);
};

export default triggerOnChange;
