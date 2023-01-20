import { ChangeEvent, useState } from "react";

export type InputType = [string, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, () => void];

const useInput = (initial = ""): InputType => {
  const [value, setValue] = useState(initial);
  const changeValue = ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setValue(value);
  const resetValue = () => setValue("");
  return [value, changeValue, resetValue];
};

export default useInput;
