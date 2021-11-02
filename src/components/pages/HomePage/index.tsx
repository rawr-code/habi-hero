import React from 'react'
import FakeForm from '../../organisms/FakeForm'
import Hero from '../../organisms/Hero'

import { Title, Subtitle, Content } from './styled'

const HomePage = () => (
    <>
        <Hero />
        <Content>
            <Title>Explore, travel, love.</Title>
            <Subtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                assumenda, sed perspiciatis enim velit placeat asperiores quas
                laudantium ipsum hic illo, commodi ex quasi dolore qui fugiat
                beatae, facilis nisi!
            </Subtitle>
            <FakeForm />
        </Content>
    </>
)

export default HomePage
