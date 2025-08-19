import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const skills = ['React', 'Node.js', 'Express', '...andMore'];
export default function CodeSnippet({ children }) {
    return (_jsx("pre", { className: "code-preview", children: _jsxs("code", { children: [_jsx("span", { className: "comment", children: "// Welcome to my portfolio" }), '\n', _jsx("span", { className: "keyword", children: "const" }), " developer = ", '{\n', "\u00A0\u00A0name: ", _jsx("span", { className: "string", children: "\"May C\"" }), ",", '\n', "\u00A0\u00A0skills: [", skills.map((skill, index) => (_jsxs(React.Fragment, { children: [_jsx("span", { className: "string", children: skill }), index < skills.length - 1 && ', '] }, skill))), "],", '\n', "\u00A0\u00A0passion: ", _jsx("span", { className: "string", children: "\"Creating amazing web experiences\"" }), '\n', '};\n\n', _jsx("span", { className: "keyword", children: "console" }), ".log(", _jsx("span", { className: "string", children: "\"Let's build something great!\"" }), ");", children] }) }));
}
