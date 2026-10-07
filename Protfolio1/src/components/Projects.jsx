import React from 'react'
import Section from './Section'
import Container from './Container'
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
const Projects = () => {
    return (
        <Section id='projects' className='bg-neutral-900'>
            <Container >
                <SectionHeading
                    align='center'
                    eyebrow="Portfolio"
                    title="My Projects"
                    description="Some of the projects I have built while learning and practicing web development."
                />
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => {
                        return (<ProjectCard key={project.id} project={project} />)
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default Projects
