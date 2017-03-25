import * as React from "react";
import * as ReactDOM from "react-dom";

export class Console extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        switch (this.props.currentEditMode) {
            case "none":
                return (<PopMessage message="" />);
            case "add_node":
                return (<PopMessage message="增加新节点: 在空白处左键单击" />);
            case "edit_node":
                if (this.props.isLayoutPanelVisible) {
                    this.props.toggleLayoutPanelVisible();
                }
                return (<EditNodePanel isEditNodePanelVisible={this.props.isEditNodePanelVisible} toggleEditNodePanelVisible={this.props.toggleEditNodePanelVisible} />);
            case "add_edge":
                return (<PopMessage message="增加连接: 从一个节点拖拽到另一个节点" />);
            case "edit_edge":
                return (<PopMessage message="编辑连接: 拖拽连接的末端" />);
            case "delete_selected":
                return (<PopMessage message="选中的元素已经被删除" />);
            case "layout":
                if (this.props.isEditNodePanelVisible) {
                    this.props.toggleEditNodePanelVisible();
                }
                return (<LayoutPanel isLayoutPanelVisible={this.props.isLayoutPanelVisible} toggleLayoutPanelVisible={this.props.toggleLayoutPanelVisible} />);
            default:
                return (<div id="console"></div>);
        }
    }
}

class PopMessage extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    componentDidMount() {
        setTimeout(function() {
            $("#pop_message").fadeOut(400);
        }, 1800);
    }
    componentWillUpdate() {
        $("#pop_message").show();
    }
    componentDidUpdate() {
        setTimeout(function() {
            $("#pop_message").fadeOut(400);
        }, 1800);
    }
    render() {
        return (<div id="pop_message">{this.props.message}</div>);
    }
}

class EditNodePanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const style = {
            display: this.props.isEditNodePanelVisible ? "table" : "none"
        }
        return (
            <div id="edit_node_panel" style={style}>
                <span>节点标签: </span>
                <input id="edit_node_label" type="text" size={30} />
                <span>节点图形: </span>
                <select id="edit_node_shape">
                    <option value="stay_the_same">stay the same</option>
                    <option value="ellipse">ellipse</option>
                    <option value="circle">circle</option>
                    <option value="box">box</option>
                </select>
                <button id="edit_node_confirm" onClick={() => this.props.toggleEditNodePanelVisible()}>确认</button>
                <button id="edit_node_cancel" onClick={() => this.props.toggleEditNodePanelVisible()}>取消</button>
            </div>
        );
    }
}

class LayoutPanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let style = {
            display: this.props.isLayoutPanelVisible ? "table" : "none"
        }

        return (
            <div id="layout_panel" style={style}>
                <span>布局类型: </span>
                <select id="layout_selector">
                    <option value="default">默认布局</option>
                    <option value="LR">从左至右</option>
                    <option value="RL">从右至左</option>
                    <option value="UD">从上至下</option>
                    <option value="DU">从下至上</option>
                </select>
                <button id="layout_confirm" onClick={() => this.props.toggleLayoutPanelVisible()}>确认</button>
                <button id="layout_cancel" onClick={() => this.props.toggleLayoutPanelVisible()}>取消</button>
            </div>
        );
    }
}
