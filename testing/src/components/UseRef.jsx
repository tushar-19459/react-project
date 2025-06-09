import { useRef } from "react";

export default function UseRef() {
  const inputRef = useRef(null); // create a reference to store the input DOM element

  function handleClick() {
    console.log(inputRef.current.id)
    inputRef.current.focus() // focus the input element
  }

  return (
    <>
      <input ref={inputRef} className="tushar" id="raj" type="text" placeholder="Click the button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
