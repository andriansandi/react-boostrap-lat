import React from 'react'
import Information from './Information'

export default function About() {
    return (
        <>
            <h1>Ini adalah About</h1>
            <Information title="Informasi Binar" 
                    author="John Smith" 
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut nibh leo." 
                    date="Jan 17, 2022" />
        </>
    )
}