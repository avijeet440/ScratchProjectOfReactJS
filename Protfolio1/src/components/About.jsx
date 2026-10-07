import { about } from '../data/portfolioData'
import Section from './Section'
import Container from './Container'
import SectionHeading from './SectionHeading'
import profileImage from '../assets/profile.png'

const About = () => {
    return (
        <Section id='about' className=' bg-neutral-900'>
            <Container className='flex flex-col gap-12 md:flex-row md:gap-20  lg:flex-raw lg:gap-32 max-w-4xl' >
                <SectionHeading eyebrow={about.eyebrow} title={about.title}
                    description={about.description}
                    description3={about.description3} align='center' />

                <div>
                    <p>

                    </p>
                </div>
            </Container>
        </Section>
    )
}

export default About
