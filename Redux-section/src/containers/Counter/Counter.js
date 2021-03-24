import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                {/*<CounterOutput value={this.state.counter} />*/}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onIncrement5Counter} />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrement5Counter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>
                            {storedResult.value}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onIncrement5Counter: () => dispatch({ type: 'INCREMENT5', val: 5 }),
        onDecrement5Counter: () => dispatch({ type: 'DECREMENT5', val: 5 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', resultElId: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);