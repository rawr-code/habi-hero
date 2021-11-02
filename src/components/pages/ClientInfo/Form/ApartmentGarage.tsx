import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import Checkbox from '../../../molecules/Checkbox'

const ApartmentGarage = () => {
    const labels = ['¿Poseé parqueadero?', '¿Es un parquedero cubierto?']
    const garageValues = useInputField({
        key: 'garage',
        label: labels[0],
    })
    const isCloseValues = useInputField({
        key: 'closed',
        label: labels[1],
    })

    return (
        <>
            <Checkbox
                label={labels[0]}
                checked={garageValues.checked}
                onChange={garageValues.onChange}
            />
            <Checkbox
                label={labels[1]}
                checked={isCloseValues.checked}
                onChange={isCloseValues.onChange}
            />
        </>
    )
}

export default ApartmentGarage
