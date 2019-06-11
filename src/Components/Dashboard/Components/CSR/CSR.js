import React, {Component} from 'react';

// SIBLING COMPONENTS
import DashboardTitle from '../UniversalComponents/DashboardTitle/DashboardTitle';
import ScheduledFlights from '../UniversalComponents/ScheduledFlights/ScheduledFlights';

// STYLED COMPONENTS
import {} from './CSRStyles';

// CSR COMPONENT
class CSR extends Component {
    render(){
        return (
            <div>
                <DashboardTitle role='csr' />
                <ScheduledFlights role='csr' />
            </div>
        )
    }
}

export default CSR;