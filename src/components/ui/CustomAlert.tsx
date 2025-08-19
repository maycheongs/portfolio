
import { useEffect } from 'react';

type CustomAlertProps = {
    type?: 'success' | 'error' | 'warning' | 'info';
    isVisible: boolean;
    onClose: () => void;
    timer?: number; // in milliseconds, 0 means no auto close
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;


export default function CustomAlert({ type = 'info', isVisible, onClose, timer = 0, children, ...props }: CustomAlertProps) {
    if (!isVisible) return null;
    useEffect(() => {
        if (Number.isInteger(timer) && timer > 0) {
            const id = setTimeout(onClose, timer);
            return () => clearTimeout(id);
        }
    }, [timer, onClose]);

    const getAlertStyle = (): React.CSSProperties => {
        const baseStyle: React.CSSProperties = {
            position: 'fixed',
            top: '50vh',
            right: '50vw',
            padding: '15px',
            borderRadius: '4px',
            border: '1px solid',
            maxWidth: '400px',
            zIndex: 1000,
            textAlign: 'center'
        };

        switch (type) {
            case 'success':
                return {
                    ...baseStyle,
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    color: '#155724'
                };
            case 'error':
                return {
                    ...baseStyle,
                    backgroundColor: '#f8d7da',
                    borderColor: '#f5c6cb',
                    color: '#721c24'
                };
            case 'warning':
                return {
                    ...baseStyle,
                    backgroundColor: '#fff3cd',
                    borderColor: '#ffeaa7',
                    color: '#856404'
                };
            default: // info
                return {
                    ...baseStyle,
                    backgroundColor: 'white',
                    borderColor: '#bee5eb',
                    color: '#0c5460'
                };
        }
    };

    return (
        <div style={getAlertStyle()}>
            {children}
            <button
                onClick={onClose}
                style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '18px',
                    cursor: 'pointer',
                    marginLeft: '12px',
                    padding: '0 4px',
                    color: 'inherit'
                }}
            >
                ×
            </button>
        </div>
    );
}
