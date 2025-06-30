export default function Icon ({ name, size = 24, className = ''}) {
    return (
        <img
        src={`/svg/${name}.svg`}
        alt= ''
        width={size}
        height={size}
        className={`icon ${className}`}
        style={{ display: 'inline-block' }}
        />
    )
}