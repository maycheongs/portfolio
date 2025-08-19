import { jsx as _jsx } from "react/jsx-runtime";
export default function IconLink({ href, icon, label, external = false, className = '' }) {
    return (_jsx("a", { href: href, target: external ? '_blank' : undefined, className: `icon-link ${className}`, "aria-label": label, children: icon }));
}
