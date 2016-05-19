var React = require('react');
var _ = require('lodash');

module.exports = React.createClass({
    getInitialState : function() {
        return {
            server : "stage4",
            id : _.random(1000)
        }
    },
    render : function() {
        return (<div id={this.props.id}>
            <h1>{this.props.server}</h1>
        </div>);
    }
});