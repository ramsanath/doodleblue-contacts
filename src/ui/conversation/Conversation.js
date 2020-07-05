import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/conversation.css';
import Icon from '../components/Icon';
import { getInitials } from '../../Helper';
import {
    FETCH_CONVERSATION,
    TYPE_IN_MESSAGE,
    SEND_MESSAGE
} from '../../redux/actions/ConversationActions';
import ConversationItem from './ConversationItem';

const Conversation = ({
    style
}) => {
    const dispatch = useDispatch();
    const {
        conversations,
        contact,
        messageInput
    } = useSelector(state => state.conversation);
    console.log(conversations);
    const { currentUser } = useSelector(state => state.user);
    const chatBody = useRef();

    const handleInputMessageChange = useCallback(e => {
        dispatch(TYPE_IN_MESSAGE.trigger(e.target.value));
    });

    const handleKeyUp = useCallback(e => {
        const keyCode = e.which || e.keyCode;
        if (keyCode === 13) {
            handleSendMessage(e);
        }
    });

    const handleSendMessage = useCallback(e => {
        e.stopPropagation();
        e.preventDefault();
        if (!messageInput) return;
        dispatch(SEND_MESSAGE.trigger());
    });

    useEffect(() => {
        if (currentUser.id && contact.id) {
            const payload = {
                currentUser,
                targetUser: contact
            };
            dispatch(FETCH_CONVERSATION.trigger(payload));
        }
    }, [currentUser.id, contact.id]);

    useEffect(() => {
        if (conversations.length && chatBody.current) {
            chatBody.current.scrollTo(0, chatBody.current.scrollHeight);
        }
    }, [conversations.length])

    const renderBody = useCallback(() => {
        if (currentUser.id && contact.id) {
            return renderConversation();
        }
        return (
            <div className="select-user-msg">
                <Icon
                    icon={currentUser.id ? "chat" : "person"}
                    size={80}
                />
                {currentUser.id
                    ? 'Select a contact to start chatting with'
                    : 'Select current user from the dropown'}
            </div>
        );
    });

    const renderConversation = useCallback(() => [
        <div id="chat-header" key="header">
            <div className="initials">
                {getInitials(contact.name)}
            </div>
            <div>{contact.name}</div>
        </div>,
        <div id="chat-body" key="body" ref={chatBody}>
            {conversations.map(data =>
                <ConversationItem data={data} key={data.id} />
            )}
        </div>,
        <div id="chat-input" key="input">
            <input
                value={messageInput}
                onKeyUp={handleKeyUp}
                onChange={handleInputMessageChange}
                placeholder="Type and send a message"
            />
            <div id="send" onClick={handleSendMessage}>
                <Icon icon="send" />
            </div>
        </div>
    ]);

    return (
        <div id="conversation" style={style}>
            {renderBody()}
        </div>
    );
}

export default Conversation;