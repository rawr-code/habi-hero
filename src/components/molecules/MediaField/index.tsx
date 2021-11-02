import React, { ComponentPropsWithoutRef, useRef } from 'react'
import Button from '../../atoms/Button'
import { ActionsWrapper, ImagePreview, InputHidden, MediaWrapper } from './styled'

interface MediaFieldProps extends ComponentPropsWithoutRef<'input'> {
    value?: string
}

const MediaField: React.FC<MediaFieldProps> = ({
    value,
    onChange,
}) => {
    const inputFileRef = useRef<HTMLInputElement>(null)

    const handleOnClick = () => {
        inputFileRef?.current?.click()
    }

    return (
        <MediaWrapper>
            {value && <ImagePreview src={value} alt="preview" />}
            <InputHidden
                accept="image/*"
                type="file"
                ref={inputFileRef}
                onChange={onChange}
            />
            <ActionsWrapper>
                <Button onClick={handleOnClick}>Subir foto</Button>
            </ActionsWrapper>
        </MediaWrapper>
    )
}

export default MediaField
