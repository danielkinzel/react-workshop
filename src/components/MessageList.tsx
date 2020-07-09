import React from 'react';
import {Message} from 'Domain/Message';

interface Props {
    messages: Message[]
}

function MessageList(props: Props): JSX.Element {

    return (
        <ul>
            {props.messages.map(message => (
                <li key={message.id}>{message.name}: {message.content}</li>
            ))}
        </ul>
    )
}

export default MessageList;