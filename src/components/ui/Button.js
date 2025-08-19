import { jsx as _jsx } from "react/jsx-runtime";
export default function Button({ to, onClick, className, disabled, children, ...props }) {
    if (to) {
        // anchor version
        return (_jsx("a", { href: to, onClick: onClick, className: `btn ${className} ${disabled ? "disabled" : ""}`, ...props, children: children }));
    }
    // button version
    return (_jsx("button", { type: props.type ?? "button", onClick: onClick, disabled: disabled, className: `btn ${className}`, ...props, children: children }));
}
