import styled from 'styled-components'

export const StyledBurger = styled.button<{
    open: boolean
}>`
    overflow: hidden;
    position: absolute;
    top: 24px;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
        height: 0.25rem;
        background: ${({ theme }) => theme.palette.primary.main};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
            width: ${({ open }) => (open ? '2rem' : '1rem')};
        }
        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) =>
                open ? 'translateX(20px)' : 'translateX(0)'};
            width: 2rem;
        }
        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
            width: ${({ open }) => (open ? '2rem' : '1.5rem')};
        }
    }
`
