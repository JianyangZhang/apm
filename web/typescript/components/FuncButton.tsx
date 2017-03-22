import * as React from "react";
import * as ReactDOM from "react-dom";

export var FuncButton = React.createClass({
    getDefaultProps: function() {
        return {
            name: "button",
            value: "button",
            seat: "toolbar",
            changeEditMode: function(current_mode: string) {
                console.log('ToolbarButton layer:' + current_mode);
            }
        }
    },
    changeEditMode: function() {
        this.props.changeEditMode(this.props.name);
    },
    render: function() {
        return (
            <button onClick={this.changeEditMode} name={this.props.name}>
                {this.props.value}
            </button>
        )
    }
});
