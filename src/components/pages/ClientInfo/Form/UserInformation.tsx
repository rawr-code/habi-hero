import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import InputField from '../../../molecules/InputField'

const UserInformation = () => {
    const label = 'Nombres y apellidos'
    const { value, onChange } = useInputField({ key: 'name', label })

    return (
        <InputField
            value={value}
            label={label}
            placeholder={label}
            onChange={onChange}
        />
    )
}

export default UserInformation
