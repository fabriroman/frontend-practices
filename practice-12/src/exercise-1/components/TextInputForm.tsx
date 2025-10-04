import React from "react";
import "../styles/TextInputForm.css";

type TextInputFormProps = {
  text: string;
  wordsPerMinute: number;
  onTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onWpmChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInputForm: React.FC<TextInputFormProps> = ({
  text,
  wordsPerMinute,
  onTextChange,
  onWpmChange,
}) => {
  return (
    <div className="text-input-form">
      <div className="text-input-form__wpm-input">
        <label className="text-input-form__label">
          Palabras por minuto (WPM):
        </label>
        <input
          className="text-input-form__input"
          type="number"
          value={wordsPerMinute}
          onChange={onWpmChange}
          min="50"
          max="1000"
        />
      </div>

      <textarea
        className="text-input-form__textarea"
        value={text}
        onChange={onTextChange}
        placeholder="Escribe tu texto aquí..."
        rows={10}
      />
    </div>
  );
};