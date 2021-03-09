import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Order from '../../../components/Order/Order';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class Ordes extends Component {

    state = {
        orders: [],
        loading: true,
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                let fetcheOrders = [];
                let teste = []
                for (let key in response.data) {
                    fetcheOrders.push({
                        ...response.data[key],
                        id: key
                    })
                    teste.push(response.data[key])
                }
                this.setState({ loading: false, orders: fetcheOrders })
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ))}
            </div>
        )
    }
}

export default withErrorHandler(Ordes, axios);