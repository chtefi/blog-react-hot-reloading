var React = require('react')

module.exports = class Hello extends React.Component {
    constructor() {
        super();
        this.state = { message: null }
    }
    componentWillMount() {
        // we call our classic expressjs api
        fetch('./api')
            .then(res => res.text())
            .then(message => this.setState({ message }))
    }
    render() {
        // JSX is overrated
        return React.createElement("div", { style: { backgroundColor: 'orange' }},
                                          [ this.state.message || 'loading...' ])
    }
}

