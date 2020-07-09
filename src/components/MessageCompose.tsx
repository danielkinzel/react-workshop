import React, { ChangeEvent, useState} from 'react';
import { Message } from 'Domain/Message';

interface Props {
    onSubmit(message: Message): void;
}

function MessageCompose(props: Props): JSX.Element {
    const [inputValue, setInput] = useState('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        
        props.onSubmit({
            id: '' + Date.now(),
            name: 'Daniel',
            content: inputValue,
            timestamp: 11061991
        });

        setInput('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValue} />
                <button type="submit">Enter</button>
                <p>{inputValue}</p>
            </form>
        </>
    )
}

export default MessageCompose;