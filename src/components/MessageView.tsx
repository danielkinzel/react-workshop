import React from 'react';
import {Message} from 'Domain/Message';

interface Props {
    message: Message
}

function MessageView({message: {content, name, id, timestamp}}: Props): JSX.Element {
    //const {content, name, id, timestamp} = message;

    return (
        <>
            {id}
            <article>{content}</article>
            <footer>{name}</footer>
            {timestamp}
        </>
    )
}

export default MessageView;