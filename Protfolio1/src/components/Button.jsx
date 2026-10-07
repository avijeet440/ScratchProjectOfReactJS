const Button = ({
    handleClick,
    children,
    variant = 'primary',
    className = '',

    ...props
}) => {
    const baseStyle =
        'inline-flex items-center justify-center rounded-lg px-3 py-2 font-light  transition'

    const variants = {
        primary:
            'bg-blue-600 text-white hover:text-gray-200 hover:bg-blue-700',

        secondary:
            'border border-neutral-600 text-white  hover:border-blue-500 hover:text-blue-300',
    }

    return (
        <button
            onClick={handleClick} className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button