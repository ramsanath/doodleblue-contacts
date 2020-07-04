import React from 'react';

const FilledButton = ({
    children,
    loading,
    ...rest
}) => {
    const childStyle = { 
        marginLeft: loading ? 10 : 0,
        transition: '0.2s'
    }
    return (
        <div
            {...rest}
            className="filled-btn">
            {loading ? <div className="loading" /> : null}
            <div style={childStyle}>
                {children}
            </div>
        </div>
    );
}

export default FilledButton;