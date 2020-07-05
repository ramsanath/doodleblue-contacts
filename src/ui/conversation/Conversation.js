import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../css/conversation.css';
import Icon from '../components/Icon';
import { getInitials } from '../../Helper';
import { FETCH_CONVERSATION } from '../../redux/actions/ConversationActions';
import ConversationItem from './ConversationItem';

const Conversation = ({
    style
}) => {
    const dispatch = useDispatch();
    const { conversations, contact } = useSelector(state => state.conversation);
    const { currentUser } = useSelector(state => state.user);
    const chatBody = useRef();

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
        if (conversations.length &&
            chatBody.current) {
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
            <input placeholder="Type and send a message" />
            <div id="send">
                <Icon icon="send"/>
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