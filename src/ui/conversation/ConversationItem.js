import React from 'react';

const ConversationItem = ({
    data
}) => {
    return (
        <div
            className={"conversation-item " + data.type}>
            {data.message}
        </div>
    );
}

export default ConversationItem;