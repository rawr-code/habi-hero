import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import InputField from '../../../molecules/InputField'

const ApartmentLocation = () => {
    const label = 'Piso'
    const { value, onChange } = useInputField({ key: 'floor', label })

    return (
        <InputField
            value={value}
            label={label}
            placeholder="¿4?"
            onChange={onChange}
        />
    )
}

export default ApartmentLocation
