import {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    ReactNode,
    MouseEventHandler,
} from "react";

type ButtonAsAnchorProps = {
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    disabled?: boolean; // optional "disabled look", but <a> can't be truly disabled
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">;

type ButtonAsButtonProps = {
    to?: undefined;
    children: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "disabled">;

type ButtonProps = ButtonAsAnchorProps | ButtonAsButtonProps;

export default function Button({
    to,
    onClick,
    className,
    disabled,
    children,
    ...props
}: ButtonProps) {
    if (to) {
        // anchor version
        return (
            <a
                href={to}
                onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
                className={`btn ${className} ${disabled ? "disabled" : ""}`}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        );
    }

    // button version
    return (
        <button
            type={(props as ButtonAsButtonProps).type ?? "button"}
            onClick={onClick as MouseEventHandler<HTMLButtonElement>}
            disabled={disabled}
            className={`btn ${className}`}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}
