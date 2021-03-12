import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        console.log('teste')
        alert('You continue!');
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Max Schwarzmüller',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false });
                this.props.history.push('/')
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <Input inputtype='input' type='text' name='name' placeholder='Your Name' />
                <Input inputtype='input' type='email' name='email' placeholder='Your Email' />
                <Input inputtype='input' type='text' name='street' placeholder='Your Street' />
                <Input inputtype='input' type='text' name='postal' placeholder='Your Postal Number' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>);
        if (this.state.loading) {
            return <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;