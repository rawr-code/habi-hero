import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const StyledMenu = styled.nav<{
    open: boolean
}>`
    display: flex;
    flex-direction: column;
    background: #fff;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100vw)')};
    text-align: left;
    padding: 6rem 2rem 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
`

export const Link = styled(RouterLink)<{
    isActive?: boolean
}>`
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${({ theme, isActive }) =>
        isActive ? theme.palette.primary.main : '#222222'};
`
