import * as React from "react";
import * as ReactDOM from "react-dom";

export var ToolbarButton = React.createClass({
    getDefaultProps: function() {
        return {
            name: "button",
            value: "button"
        }
    },
    render: function() {
        return (
            <button name={this.props.name}>
                {this.props.value}
            </button>
        )
    }
});
