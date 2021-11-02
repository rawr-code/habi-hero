import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import Checkbox from '../../../molecules/Checkbox'

const ApartmentZones = () => {
    const labels = ['Zona BBQ', 'Salón comunal', 'Parque de juegos']
    const bbqValues = useInputField({
        key: 'bbq',
        label: labels[0],
    })
    const commonValues = useInputField({
        key: 'common',
        label: labels[1],
    })
    const gameValues = useInputField({
        key: 'game',
        label: labels[2],
    })

    return (
        <>
            <Checkbox
                label={labels[0]}
                checked={bbqValues.checked}
                onChange={bbqValues.onChange}
            />
            <Checkbox
                label={labels[1]}
                checked={commonValues.checked}
                onChange={commonValues.onChange}
            />
            <Checkbox
                label={labels[2]}
                checked={gameValues.checked}
                onChange={gameValues.onChange}
            />
        </>
    )
}

export default ApartmentZones
