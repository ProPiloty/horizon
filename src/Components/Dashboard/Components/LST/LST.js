import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './LSTStyles';

class LST extends Component {
    render(){
        const componentProps = {
            page: ''
        };
        return (
            <div>
                <DashboardTitle randomProps={componentProps} />
                <Flights />
            </div>
        )
    }
}

export default LST;