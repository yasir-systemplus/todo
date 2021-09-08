import { useEffect, useState } from "react";

function getValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

export default function useLocalStorage(key, initialVal) {
  const [state, setState] = useState(() => {
    return getValue(key, initialVal);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}
