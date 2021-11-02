import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import Image from '../../atoms/Image'

import bg1 from '../../../assets/img/1.jpeg'
import bg2 from '../../../assets/img/2.jpeg'
import bg3 from '../../../assets/img/3.jpeg'
import bg4 from '../../../assets/img/4.jpeg'
import bg5 from '../../../assets/img/5.jpeg'

import { Slider } from './styled'

const Hero = () => (
    <Slider
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
        interval={3000}
        autoPlay
        infiniteLoop
    >
        <div>
            <Image src={bg1} />
        </div>
        <div>
            <Image src={bg2} />
        </div>
        <div>
            <Image src={bg3} />
        </div>
        <div>
            <Image src={bg4} />
        </div>
        <div>
            <Image src={bg5} />
        </div>
    </Slider>
)

export default Hero
