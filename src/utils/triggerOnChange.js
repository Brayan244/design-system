const triggerOnChange = (targetRef, value) => {
  const input = targetRef.current;
  const inputEvent = new Event('change', { bubbles: true });
  input.value = value;
  inputEvent.simulated = true;

  input.dispatchEvent(inputEvent);
};

export default triggerOnChange;
