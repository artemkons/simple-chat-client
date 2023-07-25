import { useState } from "react";

type InputValue = string | number;

const useInput = (initialValue: InputValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange
    };
};

export default useInput;