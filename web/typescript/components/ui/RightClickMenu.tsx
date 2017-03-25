import * as React from "react";
import * as ReactDOM from "react-dom";
import { FuncBtn } from "./FuncBtn";

export class RightClickMenu extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const style = {
            position: "absolute"
        }
        return (
            <div id="right_click_menu" style={style}>
                <FuncBtn changeEditMode={this.props.changeEditMode} name="add_node" value="增加节点" seat="toolbar" /><br />
                <FuncBtn changeEditMode={this.props.changeEditMode} isEditNodePanelVisible={this.props.isEditNodePanelVisible} toggleEditNodePanelVisible={this.props.toggleEditNodePanelVisible} name="edit_node" value="编辑节点" seat="toolbar" /><br />
                <FuncBtn changeEditMode={this.props.changeEditMode} name="add_edge" value="增加连接" seat="toolbar" /><br />
                <FuncBtn changeEditMode={this.props.changeEditMode} name="edit_edge" value="编辑连接" seat="toolbar" /><br />
                <FuncBtn changeEditMode={this.props.changeEditMode} name="delete_selected" value="删除元素" seat="toolbar" /><br />
                <FuncBtn changeEditMode={this.props.changeEditMode} isLayoutPanelVisible={this.props.isLayoutPanelVisible} toggleLayoutPanelVisible={this.props.toggleLayoutPanelVisible} name="layout" value="预设布局" seat="toolbar" />
            </div>
        )
    }
}
