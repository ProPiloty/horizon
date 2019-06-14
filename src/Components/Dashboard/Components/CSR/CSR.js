import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import Flights from '../UniversalComponents/Flights/Flights';

// STYLED COMPONENTS
import {} from './CSRStyles';

// CSR COMPONENT
class CSR extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='csr' />
                <Flights />
            </div>
        )
    }
}

export default CSR;