import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '../ui/Icon';
import IconLink from '../ui/IconLink';
const github = import.meta.env.PUBLIC_GITHUB_URL;
const linkedin = import.meta.env.PUBLIC_LINKEDIN_URL;
const email = import.meta.env.PUBLIC_EMAIL;
export default function SocialLinks() {
    return (_jsxs("div", { className: "social-links", children: [_jsx(IconLink, { href: github, icon: _jsx(Icon, { name: "github", size: 20 }), label: "GitHub Profile", external: true }), _jsx(IconLink, { href: linkedin, icon: _jsx(Icon, { name: "linkedin", size: 20 }), label: "LinkedIn Profile", external: true }), _jsx(IconLink, { href: `mailto:${email}`, icon: _jsx(Icon, { name: "mail", size: 20 }), label: "Send Email" })] }));
}
