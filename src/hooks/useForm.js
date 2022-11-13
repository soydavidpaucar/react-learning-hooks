import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleChanges = ({ target }) => {
    const { name, value } = target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    handleChanges,
    handleResetForm
  };
};
