import * as React from "react";
import * as ReactDOM from "react-dom";

export class Console extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        switch (this.props.editMode) {
            case "none":
                return (<PopMessage message="" />);
            case "add_node":
                return (<AddNodePanel onConfirm={this.props.onConfirm} onCancel={this.props.onCancel} isEditing={this.props.isEditing} />);
            case "edit_node":
                return (<EditNodePanel onConfirm={this.props.onConfirm} onCancel={this.props.onCancel} isEditing={this.props.isEditing} />);
            case "add_edge":
                return (<PopMessage message="XXXX" />);
            case "edit_edge":
                return (<EditEdgePanel onConfirm={this.props.onConfirm} onCancel={this.props.onCancel} isEditing={this.props.isEditing} />);
            case "delete_selected":
                return (<PopMessage message="选中的元素已经被删除" />);
            case "layout":
                return (<LayoutPanel onConfirm={this.props.onConfirm} onCancel={this.props.onCancel} isEditing={this.props.isEditing} />);
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

class AddNodePanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const style = {
            display: this.props.isEditing ? "table" : "none"
        }
        return (
            <div id="add_node_panel" style={style}>
                <span>在空白处单击添加新节点, 或 </span>
                <button id="add_node_cancel" onClick={this.props.onCancel}>退出</button>
            </div>
        );
    }
}

class EditNodePanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    setSizePanelDisable = () => {
        const val: string = $("#edit_node_shape").val();
        if (val == "ellipse" || val == "circle" || val == "database" || val == "box" || val == "text") {
            $("#edit_node_size").val(null);
            $("#edit_node_size").prop('disabled', true);
        } else {
            $("#edit_node_size").prop('disabled', false);
        }
    }

    render() {
        const style = {
            display: this.props.isEditing ? "table" : "none"
        }
        return (
            <div id="edit_node_panel" style={style}>
                <span>节点标签: </span>
                <input id="edit_node_label" type="text" size={30} placeholder="为节点添加文本" />
                <span>节点图形: </span>
                <select id="edit_node_shape" onChange={this.setSizePanelDisable}>
                    <option value="stay_the_same">保持原样</option>
                    <option value="computer">计算机</option>
                    <option value="user">用户</option>
                    <option value="api">接口</option>
                    <option value="download">下载</option>
                    <option value="disk">硬盘</option>
                    <option value="circle">圆圈</option>
                    <option value="dot">圆点</option>
                    <option value="ellipse">椭圆</option>
                    <option value="box">长方形</option>
                    <option value="square">正方形</option>
                    <option value="triangle">三角形</option>
                    <option value="triangleDown">倒三角形</option>
                    <option value="diamond">菱形</option>
                    <option value="star">星形</option>
                    <option value="database">圆柱</option>
                    <option value="text">纯文本</option>
                </select>
                <span>节点大小: </span>
                <input id="edit_node_size" type="number" placeholder="1-100整数" />
                <button id="edit_node_confirm" onClick={this.props.onConfirm}>确认</button>
                <button id="edit_node_cancel" onClick={this.props.onCancel}>取消</button>
            </div>
        );
    }
}

class EditEdgePanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const style = {
            display: this.props.isEditing ? "table" : "none"
        }
        return (
            <div id="edit_edge_panel" style={style}>
                <span>拖拽被选中的连接末端到其他节点 </span>
                <button id="edit_edge_cancel" onClick={this.props.onCancel}>退出</button>
            </div>
        );
    }
}

class LayoutPanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const style = {
            display: this.props.isVisible ? "table" : "none"
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
                <button id="layout_confirm" onClick={this.props.toggleVisibility}>确认</button>
                <button id="layout_cancel" onClick={this.props.toggleVisibility}>取消</button>
            </div>
        );
    }
}
