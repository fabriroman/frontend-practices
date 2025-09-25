import { useEffect, useState } from "react";

export const KeyboardControlledCounter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setCount((count) => count + 1);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setCount((count) => Math.max(0, count - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Keyboard Controlled Counter</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => Math.max(0, count - 1))}>
        Decrement
      </button>
    </div>
  );
};
