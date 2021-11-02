import React, { useState } from 'react'

import logo from '../../../assets/img/logo.svg'

import { NavBar, Wrapper, Link, Logo, Nav, WrapperSideMenu } from './styled'
import Burger from '../../molecules/Burger'
import MobileMenu from '../../molecules/MobileMenu'

export type HeaderRoute = {
    label: string
    path: string
}

const routes: HeaderRoute[] = [
    {
        label: 'Inicio',
        path: '/',
    },
    {
        label: 'Comprar',
        path: '/comprar',
    },
    {
        label: '¿Como comprar?',
        path: '/como-comprar',
    },
    {
        label: 'Vender',
        path: '/vender',
    },
    {
        label: 'Habimetro',
        path: '/habimetro',
    },
]

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <Wrapper>
            <NavBar>
                <Logo src={logo} alt="logo" />
                <Nav>
                    {routes.map((item, index) => (
                        <Link key={index} to={item.path}>
                            {item.label}
                        </Link>
                    ))}
                </Nav>
                <WrapperSideMenu>
                    <Burger
                        open={open}
                        setOpen={() => setOpen((prev) => !prev)}
                    />
                    <MobileMenu routes={routes} open={open} handleOpen={() => setOpen(false)} />
                </WrapperSideMenu>
            </NavBar>
        </Wrapper>
    )
}

export default Header
