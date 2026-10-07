
import React from 'react'

const SectionHeading = ({ eyebrow, title, subtitle, description, description3, align = 'left' }) => {
    return (

        <div
            className={`${align === 'center'
                ? 'mx-auto text-center'
                : 'text-left'
                } max-w-2xl`}
        >
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
                    {eyebrow}
                </p>
            )}

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {title}
            </h2>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {subtitle}
            </h2>

            {description && (
                <p className="mt-4 text-lg leading-8 text-neutral-400">
                    {description}
                </p>
            )}
            {description3 && (
                <p className="mt-4 text-lg leading-8 text-neutral-400">
                    {description3}
                </p>
            )}
        </div>

    )
}

export default SectionHeading
