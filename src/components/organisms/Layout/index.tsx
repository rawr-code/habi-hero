import React from 'react'
import Header from '../Header'

import { MainContainer, Wrapper } from './styled'

const Layout: React.FC = ({ children }) => (
    <Wrapper>
        <Header />
        <MainContainer>{children}</MainContainer>
    </Wrapper>
)

export default Layout
