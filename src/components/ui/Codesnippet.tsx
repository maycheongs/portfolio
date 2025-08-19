import React, { ReactNode } from 'react';

const skills = ['React', 'Node.js', 'Express', '...andMore'];

type CodeSnippetProps = {
  children?: ReactNode;
};

export default function CodeSnippet({ children }: CodeSnippetProps) {
  return (
    <pre className="code-preview">
      <code>
        <span className="comment">// Welcome to my portfolio</span>{'\n'}
        <span className="keyword">const</span> developer = {'{\n'}
        &nbsp;&nbsp;name: <span className="string">"May C"</span>,{'\n'}
        &nbsp;&nbsp;skills: [
        {skills.map((skill, index) => (
          <React.Fragment key={skill}>
            <span className="string">{skill}</span>
            {index < skills.length - 1 && ', '}
          </React.Fragment>
        ))}
        ],{'\n'}
        &nbsp;&nbsp;passion: <span className="string">"Creating amazing web experiences"</span>{'\n'}
        {'};\n\n'}
        <span className="keyword">console</span>.log(<span className="string">"Let's build something great!"</span>);
        {children}
      </code>
    </pre>
  );
}
