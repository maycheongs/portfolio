import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
}


const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SectionWrapper;