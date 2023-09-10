import { useCallback, useState } from 'react';

function useInput(initialForm: string) {
    const [value, setValue] = useState(initialForm);

    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValue(value);
    }, []);

    return { value, onChange };
}

export default useInput;
