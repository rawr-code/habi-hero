import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

export const Slider = styled(Carousel)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    filter: brightness(0.5);
`