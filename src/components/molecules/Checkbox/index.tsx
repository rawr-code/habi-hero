import React, { ComponentPropsWithoutRef } from 'react'
import {
    CheckboxContainer,
    CheckboxLabel,
    HiddenCheckbox,
    Icon,
    StyledCheckbox,
} from './styled'

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
    label: string
}

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    className,
    checked,
    onChange,
}) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} onChange={onChange} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>
        <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
)

export default Checkbox
