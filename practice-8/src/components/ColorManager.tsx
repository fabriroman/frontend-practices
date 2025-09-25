import { useState } from "react";
import "../styles/colorManager.css";

export const ColorManager = () => {
  const [inputColor, setInputColor] = useState("");
  const [colors, setColors] = useState<string[]>([]);

  const isValidHex = (inputColor: string) => {
    return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputColor);
  };

  return (
    <div>
      <h1>Exercise 1</h1>
      <input
        type="text"
        value={inputColor}
        placeholder="#rrggbb o #rgb"
        onChange={(e) => setInputColor(e.target.value)}
      />
      <button
        onClick={() => {
          if (!isValidHex(inputColor.trim())) {
            alert("Please provide a valid color");
            return;
          }

          if (colors.includes(inputColor.trim())) {
            alert("Color already exists");
            return;
          }
          setColors([...colors, inputColor.trim()]);
          setInputColor("");
        }}
      >
        Add
      </button>
      <div className="color-list">
        {colors.map((color) => (
          <div
            key={color}
            className="color-item"
            style={{ backgroundColor: color }}
            onClick={() => (document.body.style.backgroundColor = color)}
          ></div>
        ))}
      </div>
    </div>
  );
};
