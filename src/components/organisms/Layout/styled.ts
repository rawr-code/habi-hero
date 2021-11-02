import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        background-color: #7b7b7b;
    }
`

export const MainContainer = styled.main`
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 1rem 0;

    ${({ theme }) => theme.breakpoints.up('xs')} {
        padding: 100px 80px 0;
    }
`
