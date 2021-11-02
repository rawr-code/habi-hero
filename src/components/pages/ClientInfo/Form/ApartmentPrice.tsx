import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import InputField from '../../../molecules/InputField'

const ApartmentPrice = () => {
    const label = 'Monto (COP)'
    const { value, onChange } = useInputField({ key: 'price', label })

    return (
        <InputField
            type="number"
            value={value}
            label={label}
            placeholder="¿500.000.000?"
            onChange={onChange}
        />
    )
}

export default ApartmentPrice
