import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveTopology, selectNodes } from "../actions/topologyActions";
import { Toolbar } from "./ui/Toolbar";
import { Network } from "./ui/Network";
import { Console } from "./ui/Console";
import { RightClickMenu } from "./ui/RightClickMenu";
import { didUpdate } from "../constants/didUpdate";
import { afterFinalMount } from "../constants/afterFinalMount";

class Topology extends React.Component<any, any> {
    private menuItems: object;
    private toolbarStates: object;
    private id: string;
    private flag: number;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.id = "sample";
        this.generateMenuItems();
    }

    private initState = () => {
        return {
            edit_mode: "none",
            isEditing: false,
            isLocked: false,
        };
    }

    generateMenuItems = () => {
        this.menuItems = [
            {
                text: "增加节点", type: "button", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "add_node" }); }
            },
            {
                text: "编辑节点", type: "button", getStyle: () => {
                    if (this.props.nodeState.selectedNodes.length != 0) {
                        return {
                            color: "black"
                        }
                    } else {
                        return {
                            pointerEvents: "none",
                            color: "gray"
                        }
                    }
                }, callback: () => { this.setState({ edit_mode: "edit_node", isEditing: true }); }
            },
            {
                text: "增加连接", type: "button", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "add_edge" }); }
            },
            {
                text: "编辑连接", type: "button", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "edit_edge" }); }
            },
            {
                text: "删除元素", type: "button", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "delete_selected" }); }
            },
            {
                text: "改变布局", type: "button", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "layout" }); }
            },
            {
                text: "保存拓扑", type: "button", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "save" + this.flag }); this.flag = (this.flag == 0) ? 1 : 0; }
            },
            {
                text: "锁定 ", type: "checkbox", getStyle: () => {
                    return { disabled: false }
                }, callback: () => { this.setState({ edit_mode: "none", isLocked: !this.state.isLocked }); }
            },
        ]
    }

    componentWillUpdate() {
        this.generateMenuItems();
    }

    componentDidUpdate() {
        didUpdate(this.state.isLocked);
    }

    componentDidMount() {
        afterFinalMount();
    }

    quitEditing = () => {
        this.setState({
            isEditing: false
        });
    }

    render() {
        return (
            <div id="main">
                <Toolbar items={this.menuItems} isEditing={this.state.isEditing} isLocked={this.state.isLocked} />
                <Network
                    id={this.id}
                    datagram={this.props.datagram}
                    isLocked={this.state.isLocked}
                    isEditing={this.state.isEditing}
                    editMode={this.state.edit_mode}
                    onNodesSelect={this.props.selectNodes}
                    onSave={this.props.saveTopology}
                />
                <Console editMode={this.state.edit_mode} isEditing={this.state.isEditing} onConfirm={this.quitEditing} onCancel={this.quitEditing} />
                <RightClickMenu items={this.menuItems} />
            </div>
        )
    }
};


const mapStateToProps = (storeState) => {
    return {
        datagram: storeState.datagram,
        nodeState: storeState.nodeState
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        saveTopology: saveTopology,
        selectNodes: selectNodes
    }, dispatch);
}

const TopologyApp = connect(mapStateToProps, mapDispatchToProps)(Topology);

export default TopologyApp;
