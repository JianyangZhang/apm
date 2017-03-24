import * as React from "react";
import * as ReactDOM from "react-dom";
import * as $ from "jquery";

export class Console extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        switch (this.props.currentEditMode) {
            case "none":
                return (<PopMessage id="pop_message" message="" />);
            case "add_node":
                return (<PopMessage id="pop_message" message="增加新节点: 在空白处左键单击" />);
            case "edit_node":
                return (<EditNodePanel />);
            case "add_edge":
                return (<PopMessage id="pop_message" message="增加连接: 从一个节点拖拽到另一个节点" />);
            case "edit_edge":
                return (<PopMessage id="pop_message" message="编辑连接: 拖拽连接的末端" />);
            case "delete_selected":
                return (<PopMessage id="pop_message" message="选中的元素已经被删除" />);
            case "layout":
                return (<LayoutPanel />);
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
        return (<div id={this.props.id} >{this.props.message}</div>);
    }
}

class EditNodePanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="console">
                <span>节点标签: </span>
                <input type="textarea" size={30} />
                <span>节点图形: </span>
                <input type="textarea" size={30} placeholder={"ellipse/circle/box/url"} />
                <button>确认</button>
                <button>取消</button>
            </div>
        );
    }
}

class LayoutPanel extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div id="console">
                <span>布局类型: </span>
                <select>
                    <option value="default">默认布局</option>
                    <option value="LR">从左至右</option>
                    <option value="RL">从右至左</option>
                    <option value="UD">从上至下</option>
                    <option value="DU">从下至上</option>
                </select>
            </div>
        );
    }
}
