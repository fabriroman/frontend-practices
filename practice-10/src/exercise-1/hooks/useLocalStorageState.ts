import { useState, useEffect } from "react";

export function useLocalStorageState<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error loading from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, storedValue]);

  const clearData = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return {
    value: storedValue,
    setValue: setStoredValue,
    clear: clearData,
  };
}
