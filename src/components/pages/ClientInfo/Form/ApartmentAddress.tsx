import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import InputField from '../../../molecules/InputField'

const ApartmentAddress = () => {
    const labels = ['Departamento', 'Ciudad', 'Dirección del apartamento']
    const apartmentValues = useInputField({
        key: 'apartment',
        label: labels[0],
    })
    const cityValues = useInputField({ key: 'city', label: labels[1] })
    const addressValues = useInputField({ key: 'address', label: labels[2] })

    return (
        <>
            <InputField
                label={labels[0]}
                value={apartmentValues.value}
                onChange={apartmentValues.onChange}
                placeholder="¿Boyacá?"
            />
            <InputField
                label={labels[1]}
                value={cityValues.value}
                onChange={cityValues.onChange}
                placeholder="¿Tunja?"
            />
            <InputField
                label={labels[0]}
                value={addressValues.value}
                onChange={addressValues.onChange}
                placeholder="¿Carrera 12 #16-24?"
            />
        </>
    )
}

export default ApartmentAddress
