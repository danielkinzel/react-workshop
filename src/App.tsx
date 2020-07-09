import React, { useState} from 'react';
import MessageView from 'components/MessageView';
import { Message } from 'Domain/Message';
import MessageCompose from 'components/MessageCompose';
import MessageList from 'components/MessageList';

function Welcome(props: any): JSX.Element {
    

    const [messages, setMessages] = useState<Message[]>([]);

    const handleSubmit = (submittedMessage: Message) => {setMessages([...messages, submittedMessage])};

    return (
        <>
            {/*<MessageView message={} />*/}
            <MessageCompose onSubmit={handleSubmit} />
            <MessageList messages={messages} />
        </>
    )
}

export default Welcome;
    