import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return [value, (e) => setValue(e.target.value), () => setValue(initialValue)];
};
