import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data/portfolioData'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">

            {/* Navbar */}
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <NavLink
                    to="/#home"
                    onClick={closeMenu}
                    className="text-xl font-bold tracking-wide text-white"
                >
                    {site.logo}
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-neutral-300 transition hover:text-blue-500"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="rounded-lg border border-neutral-700 p-2 text-white transition hover:border-blue-500 hover:text-blue-500 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        /* X icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        /* Hamburger icon */
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>

            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-neutral-800 bg-neutral-950 md:hidden">

                    <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">

                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={closeMenu}
                                className="border-b border-neutral-800 py-4 text-sm font-medium text-neutral-300 transition hover:text-blue-500 last:border-b-0"
                            >
                                {link.label}
                            </a>
                        ))}

                    </div>

                </div>
            )}

        </header>
    )
}

export default Navbar