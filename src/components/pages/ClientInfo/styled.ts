import styled, { css } from 'styled-components'
import Button from '../../atoms/Button'

export const StepWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
    border-radius: 12px;

    ${({ theme }) => theme.breakpoints.up('sm')} {
        padding: 4rem;
    }
`

export const LeftBox = styled.div`
    width: 50%;
    padding-right: 2rem;

    ${({ theme }) => theme.breakpoints.down('md')} {
        width: 100%;
        padding: 0;
    }
`

export const RightBox = styled.div`
    width: 50%;
    background: rgb(0 0 0 / 7%);
    border-radius: 12px;
    padding: 2rem;
    overflow-x: hidden;
    overflow-y: auto;

    ${({ theme }) => theme.breakpoints.down('md')} {
        display: none;
    }
`

export const StepNumber = styled.span`
    color: ${({ theme }) => theme.palette.text.black};
    font-size: 14px;
    font-weight: bold;
`

export const StepTitle = styled.h1<{
    small?: boolean
}>`
    color: ${({ theme }) => theme.palette.text.black};
    font-size: ${({ small }) => (small ? '14px' : '20px')};
`

export const StepSubtitle = styled.p<{
    small?: boolean
    gutter?: boolean
}>`
    color: ${({ theme }) => theme.palette.text.gray};
    font-size: ${({ small }) => (small ? '12px' : '14px')};
    ${({ gutter }) =>
        gutter &&
        css`
            margin-bottom: 1rem;
        `};
`

export const StepHeader = styled.div`
    margin-bottom: 3rem;
`

export const StepBody = styled.div`
    margin-bottom: 2rem;

    & > div {
        margin-bottom: 1rem;
    }
`

export const ResumeWrapper = styled.div`
    position: fixed;
    top: 20vh;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: ${({ theme }) => theme.palette.text.white};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    overflow-y: auto;
`

export const ResumeHeader = styled.div`
    background-color: #fff;
    padding: 1rem;

    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`

export const ResumeHeaderActions = styled.div`
    position: absolute;
    z-index: 10;
    top: 1rem;
    right: 1rem;
`

export const ResumeBody = styled.div`
    padding: 1rem;
`

export const ResumeActions = styled.div`
    & > ${Button} {
        margin-right: 1rem;
        margin-bottom: 1rem;
    }
`

export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    width: 42px;
    height: 42px;

    &:before,
    :after {
        content: '';
        position: absolute;
        width: 24px;
        height: 4px;
        background-color: black;
        border-radius: 2px;
        top: 16px;
        box-shadow: 0 0 2px 0 #ccc;
    }

    &:before {
        transform: rotate(45deg);
        left: 9px;
    }

    &:after {
        transform: rotate(-45deg);
        right: 9px;
    }
`

export const ImagePreview = styled.img`
    width: 100%;
    object-fit: cover;
    height: 200px;
    margin: 0.5rem 0;
    border-radius: 12px;

    ${({ theme }) => theme.breakpoints.up('md')} {
        height: 400px;
    }
`
