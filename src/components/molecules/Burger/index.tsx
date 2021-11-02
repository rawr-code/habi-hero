import React from 'react'
import { bool, func } from 'prop-types'
import { StyledBurger } from './styled'

type BurgerProps = {
    open: boolean
    setOpen: () => void
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
    const isExpanded = open ? true : false

    return (
        <StyledBurger
            aria-expanded={isExpanded}
            open={open}
            onClick={setOpen}
        >
            <span />
            <span />
            <span />
        </StyledBurger>
    )
}

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
}

export default Burger
