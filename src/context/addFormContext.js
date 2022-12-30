import React, { useState } from "react";

export const AddFormContext = React.createContext();

const AddFormContextAPI = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [shouldFocus, setShouldFocus] = useState(true);

  const updateInputValue = (value) => {
    setInputValue(value);
    setIsButtonDisabled(value.length === 0);
  }

  const resetForm = () => {
    setIsButtonDisabled(true);
    setShouldFocus(true);
  }

  return (
    <AddFormContext.Provider value={{
      inputValue,
      isButtonDisabled,
      shouldFocus,
      setShouldFocus,
      updateInputValue,
      resetForm
    }}>
      {children}
    </AddFormContext.Provider>
  );
};

export default AddFormContextAPI;
