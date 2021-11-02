import styled from 'styled-components'

export const FormInputField = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    padding: 0 0.25rem;
    width: 100%;

    ${({ theme }) => theme.breakpoints.up('xs')} {
        width: 200px;
    }
`

export const FormInputLabel = styled.label`
    font-size: 12px;
    color: #222222;
    font-weight: bold;
`

export const FormInput = styled.input`
    font-size: 14px;
    color: #222222;
    border: none;
    width: 100%;
`

export const ErrorLabel = styled.p`
    font-size: 12px;
    color: #f44336;
    margin-top: 2 px;
`
