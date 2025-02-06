import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const onInputchange = ({ target }) => {
    const { name, value } = target;

    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetInputs = () => {
    setformState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputchange,
    onResetInputs,
  };
};

export default useForm;
