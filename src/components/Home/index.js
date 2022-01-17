import React from 'react'
import Information from '../../Information';

import './home.css'

import {
    Container
} from 'react-bootstrap'

export default function Home() {
    return (
        <div className="article-wrapper">
            <Container>
                <Information title="Informasi Binar" 
                    author="John Smith" 
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nibh leo." 
                    date="Jan 17, 2022" />
            </Container>
        </div>
    )
}