import React, { useState, useEffect } from 'react';
import MessageView from 'components/MessageView';
import DeviceView from 'components/Device/DeviceView';
import { Message } from 'Domain/Message';
import { Device } from 'Domain/Device';
import MessageCompose from 'components/MessageCompose';
import MessageList from 'components/MessageList';
import DeviceList from 'components/Device/DeviceList';

type DeviceSetter = (devices: Device[]) => void
const useDeviceState = (): [Device[], DeviceSetter] => {
    const [devices, setDevices] = useState<Device[]>([]);

    return [devices, setDevices]
}

const useDevices = () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const [devices, setDevices] = useDeviceState();
    useEffect(() => {
        fetch("/datasource/devices.json", requestOptions)
            .then((response) => response.json())
            .then((data) => setDevices(Object.values(data.devices)));
    }, []);

    return devices;
}

function Welcome(props: any): JSX.Element {
    const [messages, setMessages] = useState<Message[]>([]);


    const handleSubmit = (submittedMessage: Message) => { setMessages([...messages, submittedMessage]) };
    const devices = useDevices();

    return (
        <>
            <DeviceList devices={devices} />
        </>
    );
}

export default Welcome;
