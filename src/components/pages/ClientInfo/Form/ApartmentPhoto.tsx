import React from 'react'
import useInputField from '../../../../hooks/useInputField'

import MediaField from '../../../molecules/MediaField'

const ApartmentPrice = () => {
    const label = 'Foto'
    const { value, onChange } = useInputField({ key: 'photo', label })

    console.log({ value })
    return (
        <MediaField
            value={value}
            onChange={onChange}
        />
    )
}

export default ApartmentPrice
