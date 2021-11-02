import React from 'react'
import { useLocation } from 'react-router-dom'
import { HeaderRoute } from '../../organisms/Header'
import { StyledMenu, Link } from './styled'

type MobileMenuProps = {
    open: boolean
    handleOpen: () => void
    routes: HeaderRoute[]
}
const MobileMenu: React.FC<MobileMenuProps> = ({
    open,
    handleOpen,
    routes,
}) => {
    const { pathname } = useLocation()
    const isHidden = open ? true : false

    return (
        <StyledMenu open={open} aria-hidden={!isHidden}>
            {routes.map((item, index) => (
                <Link
                    key={index}
                    to={item.path}
                    isActive={pathname.includes(item.path)}
                    onClick={handleOpen}
                >
                    {item.label}
                </Link>
            ))}
        </StyledMenu>
    )
}

export default MobileMenu
