import React from 'react';
import Icon from './Icon';

const SideBar = ({
    title,
    onRequestBack,
    children,
    style
}) => {
    return (
        <div className="sidebar" style={style}>
            <div className="sidebar-header">
                <Icon
                    icon="back"
                    onClick={onRequestBack}
                    style={{ marginRight: 10 }}
                />
                {title}
            </div>
            {children}
        </div>
    );
}

export default SideBar;