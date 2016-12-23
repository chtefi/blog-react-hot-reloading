var React = require('react')

const title = (props) => React.createElement("div", null, props.text)

module.exports = class Hello extends React.Component {
    constructor() { super(); this.state = { message: null } }
    componentWillMount() { // we call our classic expressjs api
        fetch('./api').then(res => res.text())
            .then(message => this.setState({ message }))
    }
    render() {
        return React.createElement("div", { style: { backgroundColor: 'red' } },
               React.createElement(title, { text: "Message: " + (this.state.message || 'loading...') }))

        // return React.createElement("div", { style: { backgroundColor: 'blue' }},
        //                                   [ this.state.message || 'loading...' ])
    }
}

