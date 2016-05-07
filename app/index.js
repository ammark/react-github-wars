var USER_DATA = {
    name: 'Ammar Kalim',
    username: 'ammarkalim',
    image: 'https://avatars2.githubusercontent.com/u/687976?v=3&s=140'
}

var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render: function() {
        console.log(this.props);
        return (
            <div>Hello {this.props.name}</div>
        )
    }
});

ReactDOM.render(
    <HelloWorld name="Ammar" anySortOfData={29} />,
    document.getElementById('app')
);
