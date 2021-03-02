import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            componet: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    console.log(cmp)
                    this.setState({ componet: cmp.default })
                });
        }
        render() {
            const C = this.state.componet;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;