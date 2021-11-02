import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Wrapper = styled.div`
    width: 90%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const NavBar = styled.header`
    position: absolute;
    z-index: 10;
    top: 0;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
`

export const Logo = styled.img`
    width: 48px;
    height: 48px;
`

export const Link = styled(RouterLink)`
    text-decoration: none;
    text-align: none;
    font-weight: bold;
`

export const Nav = styled.nav`
    display: flex;
    cursor: pointer;

    ${({ theme }) => theme.breakpoints.down('xs')} {
        display: none;
    }

    & > ${Link} {
        margin: 0 1rem;
        color: #fff;
    }
`

export const WrapperSideMenu = styled.div`
    position: fixed;
    top: 0;
    right: 1rem;

    ${({ theme }) => theme.breakpoints.up('xs')} {
        display: none;
    }
`
