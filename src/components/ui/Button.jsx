export default function Button({
    to,
    onClick,
    className,
    disabled,
    children, ...props
}) {
    if (to) {
        // If the 'to' prop is provided, return a link (<a>)
        return (
            <a href={to} className={`btn ${className}`}>
                {children}
            </a>
        );
    } else {
        // If 'to' prop is not provided, return a button (<button>)
        return (
            <button onClick={onClick} disabled={disabled} className={`btn ${className}`} {...props}>
                {children}
            </button>
        );
    }
};