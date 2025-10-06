import React from "react";
import "../styles/TextMetrics.css";

type TextMetricsProps = {
  totalCharacters: number;
  wordsPerMinute: number;
  averageWordLength: number;
  estimatedReadingTime: number;
};

export const TextMetrics: React.FC<TextMetricsProps> = ({
  totalCharacters,
  wordsPerMinute,
  averageWordLength,
  estimatedReadingTime,
}) => {
  return (
    <div className="text-metrics">
      <div className="text-metrics__metric">
        <span className="text-metrics__metric-text">
          Caracteres totales: {totalCharacters}
        </span>
      </div>
      <div className="text-metrics__metric">
        <span className="text-metrics__metric-text">
          Palabras por minuto: {wordsPerMinute}
        </span>
      </div>
      <div className="text-metrics__metric">
        <span className="text-metrics__metric-text">
          Longitud promedio de palabras: {averageWordLength}
        </span>
      </div>
      <div className="text-metrics__metric">
        <span className="text-metrics__metric-text">
          Tiempo estimado de lectura: {estimatedReadingTime} min
        </span>
      </div>
    </div>
  );
};

