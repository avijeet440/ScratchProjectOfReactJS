import SocialLinks from './SocialLinks'
import Section from './Section'
import Container from './Container'
import { hero, site } from '../data/portfolioData'
import profileImage from '../assets/profile.png'
import Button from './Button'
const Hero = () => {
    return (
        <Section id='home' className="min-h-screen bg-neutral-950 pt-16">
            <Container>

                <div className="  grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-2 lg:gap-20">

                    {/* Left Side */}

                    <div >
                        <p className='text-xl font-medium text-blue-500'>
                            {hero.greeting}
                        </p>
                        <h1 className='mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>
                            {hero.name}
                        </h1>
                        <h2 className='mt-2 text-2xl font-bold text-neutral-300 sm:text-3xl'>
                            {hero.role}
                        </h2>
                        <p className='mt-6 max-w-xl text-lg leading-8 text-neutral-400'>
                            {hero.description}
                        </p>

                        {/* Button */}
                        <div className='mt-8 flex gap-4 flex-wrap'>
                            <a href="#contact">
                                <Button className='text-sm '>
                                    CONTACT ME
                                </Button>
                            </a>
                            <a href="#projects">
                                <Button className='text-sm' variant='secondary'>
                                    VIEW PROJECTS
                                </Button>
                            </a>

                        </div>
                        {/* Social Links */}

                        <div className="mt-8">
                            <SocialLinks />
                        </div>
                    </div>


                    {/* Right Side */}


                    <div className="relative flex justify-center lg:justify-end">

                        {/* Blue Glow */}

                        <div className="absolute h-72 w-72 rounded-full bg-blue-600/30 blur-3xl sm:h-96 sm:w-96" />

                        <img
                            src={profileImage}
                            alt={site.name}
                            className="relative z-10 w-72 object-contain sm:w-96 lg:w-[500px]"
                        />

                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default Hero
