import React, { ComponentPropsWithoutRef } from 'react'
import { ErrorLabel, FormInput, FormInputField, FormInputLabel } from './styled'

interface InputFieldProps extends ComponentPropsWithoutRef<'input'> {
    label: string
    error?: string
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder,
    value,
    type = 'text',
    error,
    onChange,
}) => {
    return (
        <FormInputField>
            <FormInputLabel>{label}</FormInputLabel>
            <FormInput
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
            />
            {error && <ErrorLabel>{error}</ErrorLabel>}
        </FormInputField>
    )
}

export default InputField
