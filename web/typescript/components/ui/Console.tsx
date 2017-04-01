import * as React from "react";
import * as ReactDOM from "react-dom";

export class Console extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
    }

    private initState = () => {
        return {
            // checker的作用:
            // 1.当用户不断点击工具栏的同一个按钮时, checker可以切换控制台隐藏显示状态
            // 2.当用户点击控制台的"确认"或"取消"按钮后, 控制台就被隐藏了, checker可以让工具栏的按钮再次显示控制台
            editNodePanelChecker: true,
            layoutPanelChecker: true,

            // 真正决定控制台隐藏显示的state
            isEditNodePanelVisible: false,
            isLayoutPanelVisible: false
        };
    }

    toggleEditNodePanelVisibility = () => {
        this.state.editNodePanelChecker = false;
        this.state.isEditNodePanelVisible ?
            this.setState({ isEditNodePanelVisible: false }) : this.setState({ isEditNodePanelVisible: true });
    }

    toggleLayoutPanelVisibility = () => {
        this.state.layoutPanelChecker = false;
        this.state.isLayoutPanelVisible ?
            this.setState({ isLayoutPanelVisible: false }) : this.setState({ isLayoutPanelVisible: true });
    }

    componentDidUpdate() {
        this.state.editNodePanelChecker = true;
        this.state.layoutPanelChecker = true;
    }

    render() {
        switch (this.props.editMode) {
            case "none":
                return (<PopMessage message="" />);
            case "add_node":
                return (<PopMessage message="增加新节点: 在空白处左键单击" />);
            case "edit_node":
                if (this.state.editNodePanelChecker) {
                    this.state.isEditNodePanelVisible = !this.state.isEditNodePanelVisible;
                }
                return (<EditNodePanel isVisible={this.state.isEditNodePanelVisible} toggleVisibility={this.toggleEditNodePanelVisibility} />);
            case "add_edge":
                return (<PopMessage message="增加连接: 从一个节点拖拽到另一个节点" />);
            case "edit_edge":
                return (<PopMessage message="编辑连接: 拖拽连接的末端" />);
            case "delete_selected":
                return (<PopMessage message="选中的元素已经被删除" />);
            case "layout":
                if (this.state.layoutPanelChecker) {
                    this.state.isLayoutPanelVisible = !this.state.isLayoutPanelVisible;
                }
                return (<LayoutPanel isVisible={this.state.isLayoutPanelVisible} toggleVisibility={this.toggleLayoutPanelVisibility} />);
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
            display: this.props.isVisible ? "table" : "none"
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
                <button id="edit_node_confirm" onClick={this.props.toggleVisibility}>确认</button>
                <button id="edit_node_cancel" onClick={this.props.toggleVisibility}>取消</button>
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
