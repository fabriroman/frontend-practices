import React, { useState, useMemo } from "react";
import { TextInputForm } from "./TextInputForm";
import { TextMetrics } from "./TextMetrics";
import "../styles/CharacterCounter.css";

export const CharacterCounter = () => {
  const [text, setText] = useState<string>("");
  const [wordsPerMinute, setWordsPerMinute] = useState<number>(200);

  const textMetrics = useMemo(() => {
    console.log("Calculating text metrics");
    if (!text.trim()) {
      return {
        totalCharacters: 0,
        totalWords: 0,
        averageWordLength: 0,
      };
    }

    const totalCharacters = text.length;

    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    const totalWords = words.length;

    const charactersWithoutSpaces = text.replace(/\s/g, "").length;
    const averageWordLength =
      totalWords > 0
        ? Math.round((charactersWithoutSpaces / totalWords) * 10) / 10
        : 0;

    return {
      totalCharacters,
      totalWords,
      averageWordLength,
    };
  }, [text]);

  const estimatedReadingTime =
    textMetrics.totalWords > 0
      ? Math.ceil(textMetrics.totalWords / wordsPerMinute)
      : 0;

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleWpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordsPerMinute(Number(event.target.value));
  };

  return (
    <div className="character-counter">
      <h1 className="character-counter__title">
        Contador de Caracteres para Escritores
      </h1>

      <TextInputForm
        text={text}
        wordsPerMinute={wordsPerMinute}
        onTextChange={handleTextChange}
        onWpmChange={handleWpmChange}
      />

      <TextMetrics
        totalCharacters={textMetrics.totalCharacters}
        wordsPerMinute={wordsPerMinute}
        averageWordLength={textMetrics.averageWordLength}
        estimatedReadingTime={estimatedReadingTime}
      />
    </div>
  );
};