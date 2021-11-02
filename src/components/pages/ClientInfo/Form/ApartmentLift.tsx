import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import Checkbox from '../../../molecules/Checkbox'

const ApartmentLift = () => {
    const label = '¿Poseé ascensor?'
    const { checked, onChange } = useInputField({
        key: 'lift',
        label,
    })

    return (
        <>
            <Checkbox
                checked={checked}
                label={label}
                onChange={onChange}
            />
        </>
    )
}

export default ApartmentLift
