import React, { Component } from 'react';
import tardis from '../tardis';

export class DisplayTardis extends Component {
    render() {
        return (
            <div>
                {tardis.name}
            </div>
        )
    }
};

export default DisplayTardis;
