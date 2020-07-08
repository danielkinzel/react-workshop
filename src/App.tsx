import React from 'react';
import MessageView from 'components/MessageView';
import { Message } from 'Domain/Message';

function Welcome(props: any): JSX.Element {
    const message: Message = {
        id: '1337',
        name: 'Mr president',
        content: 'Cocojambo',
        timestamp: 4711
    }
    return <MessageView message={message} />
}

export default Welcome;
    