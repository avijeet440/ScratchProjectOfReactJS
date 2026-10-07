import React from 'react'
import Section from './Section'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { skills } from '../data/portfolioData'
const Skills = () => {
    return (

        <Section id='skills' className='bg-neutral-950 '>
            <Container className='mt-20'>
                <SectionHeading eyebrow={skills.eyebrow} title={skills.title} align='center' />

                <div className='mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 '>
                    {skills.items.map((skill) => {
                        return (<div className="uppercase rounded-xl border border-neutral-700 bg-neutral-800 p-8 text-center lg:text-center text-sm text-neutral-200 transition duration-200 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-500" key={skill}>{skill}</div>)
                    })}

                </div>
            </Container>

        </Section>
    )
}

export default Skills
