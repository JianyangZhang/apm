import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";

export var PopMessage = React.createClass({
    getDefaultProps: function() {
        return {
            id: "console",
            message: ""
        }
    },
    componentWillUpdate: function() {
        let id = "#" + this.props.id;
        $(id).show();
    },
    componentDidUpdate: function() {
        let id = "#" + this.props.id;
        setTimeout(function() {
            $(id).fadeOut(1000);
        }, 1500);
    },
    render: function() {
        return (<div id={this.props.id} >{this.props.message}</div>);
    }
});
