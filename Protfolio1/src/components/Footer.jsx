import Container from './Container'
import SocialLinks from './SocialLinks'
import { site } from '../data/portfolioData'

const Footer = () => {
    return (
        <footer className="border-t border-neutral-800 bg-neutral-950 py-8">

            <Container>

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

                    <div>
                        <p className="font-bold text-white">
                            {site.logo}
                        </p>

                        <p className="mt-1 text-sm text-neutral-500">
                            © {new Date().getFullYear()} {site.name}
                        </p>
                    </div>

                    <SocialLinks />

                </div>

            </Container>

        </footer>
    )
}

export default Footer