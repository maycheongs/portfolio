
const defaultStyles = {
    wrapper: {
        padding: '12px 16px',
        border: '1px solid',
        borderRadius: '4px',
        fontSize: '14px',
        margin: '8px 0',
    },
    types: {
        basic: {
            backgroundColor: '#f9f9f9',
            borderColor: '#ddd',
            color: '#333',
        },
        success: {
            backgroundColor: '#e6ffed',
            borderColor: '#88cc99',
            color: '#2f8132',
        },
        warning: {
            backgroundColor: '#fff8e1',
            borderColor: '#f0c36d',
            color: '#8a6d3b',
        },
        error: {
            backgroundColor: '#ffe6e6',
            borderColor: '#e57373',
            color: '#c62828',
        },
    },
};

export default function CustomAlert({ type = 'basic', style = {}, className = '', children, ...props }) {
    const alertStyle = {
        ...defaultStyles.wrapper,
        ...(defaultStyles.types[type] || defaultStyles.types.basic),
        ...style,
    };

    return (
        <div className={className} style={alertStyle} {...props}>
            {children}
        </div>
    );
};
