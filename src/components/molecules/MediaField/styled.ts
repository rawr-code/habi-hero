import styled from 'styled-components'

export const MediaWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.palette.text.gray};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
`

export const InputHidden = styled.input`
    display: none;
`

export const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const ActionsWrapper = styled.div`
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
`
