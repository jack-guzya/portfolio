import { useState } from 'react';

const useCallbackRef = <T>(): [T | null, (node: T | null) => void] => {
  const [elem, setElem] = useState<T | null>(null);

  return [
    elem,
    (node) => {
      if (elem !== node) {
        setElem(node);
      }
    },
  ];
};

export default useCallbackRef;