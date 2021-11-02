import styled from 'styled-components/macro'

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 3px;
    width: 16px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    width: 20px;
    height: 20px;
    position: absolute;
    opacity: 0;
`

export const StyledCheckbox = styled.div<{ checked?: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: ${({ theme, checked }) =>
        checked ? theme.palette.primary.main : theme.palette.text.gray};
    border-radius: 3px;
    transition: all 150ms;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px #acacac;
    }

    ${Icon} {
        visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
    }
`

export const CheckboxLabel = styled.p`
    margin-left: 10px;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text.black};
`
