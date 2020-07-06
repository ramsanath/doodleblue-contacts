import React from 'react';
import Loader from './Loader';

const FilledButton = ({
    children,
    loading,
    ...rest
}) => {
    const childStyle = {
        marginLeft: loading ? 10 : 0,
        transition: 'var(--animation-scale)'
    }
    return (
        <div
            {...rest}
            className="filled-btn">
            {loading ? <Loader
                foregroundColor={'#fff'}
                backgroundColor={'rgba(255, 255, 255, 0.3)'}
            /> : null}
            <div style={childStyle}>
                {children}
            </div>
        </div>
    );
}

export default FilledButton;