import React from 'react';
import { Device } from 'Domain/Device';

interface Props {
    device: Device
}

function DeviceView({ device: { name, brand, parentSku } }: Props): JSX.Element {

    return (
      <>
        <li>
          <article>
            {brand} -- {name}
          </article>
        </li>
      </>
    );
}

export default DeviceView;