import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import InputField from '../../../molecules/InputField'

const UserEmail = () => {
    const label = 'Correo electronico'
    const { value, isInvalid, onChange } = useInputField({
        key: 'email',
        label,
        regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    })

    return (
        <InputField
            value={value}
            label={label}
            placeholder="example@gmail.com"
            onChange={onChange}
            error={isInvalid ? 'Invalid email' : undefined}
        />
    )
}

export default UserEmail
