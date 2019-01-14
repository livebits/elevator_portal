import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import Map from './Map';
import dataProvider from '../dataProvider/dataProvider';
import { GET_LIST } from 'react-admin';

class ServiceUsersOnMap extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        users: [],
    };

    componentDidMount() {
        
        this.timerID = setInterval(
            this.getServiceUsers,
            5000
          );

    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    getServiceUsers = () => {
        dataProvider(GET_LIST, 'ServiceUsers', {})
            .then(users => {
                    this.setState({ users: users.data })
                }
            );
    }

    render() {
        const { users } = this.state;

        return <Card>
            <Title title="سرویس کاران روی نقشه" />
            <CardContent>
                <Map users={users}/>
            </CardContent>
        </Card>;
    }
}

export default ServiceUsersOnMap;