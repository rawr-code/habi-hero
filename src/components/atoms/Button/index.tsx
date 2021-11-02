import styled, { css } from 'styled-components'

type ButtonProps = {
    outlined?: boolean
}

const Button = styled.button<ButtonProps>`
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};

    &:hover {
        border-color: ${({ theme }) => theme.palette.primary.dark};
        background-color: ${({ theme }) => theme.palette.primary.dark};
    }

    ${({ outlined }) =>
        outlined &&
        css`
            background-color: transparent;
            color: ${({ theme }) => theme.palette.primary.main};

            &:hover {
                background-color: ${({ theme }) => theme.palette.primary.dark};
                color: #fff;
            }
        `}
`

export default Button
