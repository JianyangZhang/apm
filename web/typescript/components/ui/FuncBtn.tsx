import * as React from "react";
import * as ReactDOM from "react-dom";

export class FuncBtn extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    handleClick = () => {
        if (this.props.changeEditMode) {
            this.props.changeEditMode(this.props.name);
        }
        if (this.props.toggleEditNodePanelVisible) {
            this.props.toggleEditNodePanelVisible();
        }
        if (this.props.toggleLayoutPanelVisible) {
            this.props.toggleLayoutPanelVisible();
        }
    }
    render() {
        return (
            <button onClick={this.handleClick} name={this.props.name}>
                {this.props.value}
            </button>
        )
    }
}
