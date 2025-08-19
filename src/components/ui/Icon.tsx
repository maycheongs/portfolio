type IconProps = {
    name: string;
    size?: number;
    className?: string;
};

export default function Icon({ name, size = 24, className = '' }: IconProps) {
    return (
        <img
            src={`/svg/${name}.svg`}
            alt=''
            width={size}
            height={size}
            className={`icon ${className}`}
            style={{ display: 'inline-block' }}
        />
    )
}