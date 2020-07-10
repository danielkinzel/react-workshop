import React from 'react';
import { Device } from 'Domain/Device';
import DeviceView from 'components/Device/DeviceView'

interface Props {
    devices: Device[]
}

function DeviceList(props: Props): JSX.Element {

    
    return (
        <ul>
            {props.devices.map((device, key) => (
                <DeviceView key={key} device={device} />
            ))}
        </ul>
    )
}

export default DeviceList;