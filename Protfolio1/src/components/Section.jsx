import React from 'react'

const Section = ({ children, id, className = '' }) => {
    return (
        <div id={id}
            className={`scroll-mt-16 py-32 lg:py-40 ${className}`}>
            {children}
        </div>
    )
}

export default Section
