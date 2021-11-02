import styled from 'styled-components'
import Button from '../../atoms/Button'

export const FormWrapper = styled.form`
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2rem;

    & > :not(:last-of-type) {
        margin-right: 0.75rem;
        border-right: 1px solid #dddddd;
    }

    & > ${Button} {
        width: 100%;
    }

    ${({ theme }) => theme.breakpoints.up('xs')} {
        width: max-content;
        flex-direction: row;
    }
`

export const FormFieldsWrapper = styled.div`
    display: flex;
    width: 100%;

    ${({ theme }) => theme.breakpoints.down('xs')} {
        margin-bottom: 1rem;
    }
`
