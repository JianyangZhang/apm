import * as React from "react";
import * as ReactDOM from "react-dom";

export class Toolbar extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
    }

    private initState = () => {
        return {
            isLocked: false,
        };
    }

    render() {
        return (
            <div id="toolbar">
                <FuncBtn changeEditMode={this.props.changeEditMode} name="add_node" value="增加节点" seat="toolbar" />
                <FuncBtn isEditNodePanelVisible={this.props.isEditNodePanelVisible} toggleEditNodePanelVisible={this.props.toggleEditNodePanelVisible} changeEditMode={this.props.changeEditMode} name="edit_node" value="编辑节点" seat="toolbar" />
                <FuncBtn changeEditMode={this.props.changeEditMode} name="add_edge" value="增加连接" seat="toolbar" />
                <FuncBtn changeEditMode={this.props.changeEditMode} name="edit_edge" value="编辑连接" seat="toolbar" />
                <FuncBtn changeEditMode={this.props.changeEditMode} name="delete_selected" value="删除元素" seat="toolbar" />
                <FuncBtn isLayoutPanelVisible={this.props.isLayoutPanelVisible} toggleLayoutPanelVisible={this.props.toggleLayoutPanelVisible} changeEditMode={this.props.changeEditMode} name="layout" value="预设布局" seat="toolbar" />
            </div>
        )
    }
}

class FuncBtn extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    handleClick = () => {
        this.props.changeEditMode(this.props.name);
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
