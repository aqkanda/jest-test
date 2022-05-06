import { useRef, useState } from "react";

export const ChangeText: React.FC = () => {
  const [isText, changeText] = useState("Hello Wolrd!");
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    if (inputRef.current) {
      changeText(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <div>
      <p>{isText}</p>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>change</button>
    </div>
  );
};
