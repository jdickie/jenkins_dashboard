var React = require('react');
var _ = require('lodash');
var buildDash = require('./buildDash');

module.exports = React.createClass({
    render: function () {
        return (<section className="dashboard parent">
            <buildDash />
        </section>);
    }
});