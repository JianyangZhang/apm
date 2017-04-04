import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { editTopology, saveTopology, selectNodes, selectEdges } from "../actions/topologyActions";
import { Toolbar } from "./ui/topologyUI/Toolbar";
import { Network } from "./ui/topologyUI/Network";
import { Console } from "./ui/topologyUI/Console";
import { RightClickMenu } from "./ui/topologyUI/RightClickMenu";
import { didUpdate } from "../constants/topologyConstants/didUpdate";
import { afterFinalMount } from "../constants/topologyConstants/afterFinalMount";

class Topology extends React.Component<any, any> {
    private menuItems: object;
    private toolbarStates: object;
    private id: string;
    private flag: number;
    constructor(props, context) {
        super(props, context);
        this.state = this.initState();
        this.id = "sample";
        this.flag = 0;
        this.generateMenuItems(props);
    }

    private initState = () => {
        return {
            edit_mode: "none",
            isEditing: false,
            isLocked: false,
        };
    }

    generateMenuItems = (props) => {
        this.menuItems = [
            { text: "增加节点", type: "button", isDisabled: false, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "add_node", isEditing: true }); } },
            { text: "编辑节点", type: "button", isDisabled: (props.nodeState.selectedNodes.length == 0) ? true : false, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "edit_node", isEditing: true }); } },
            { text: "增加连接", type: "button", isDisabled: false, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "add_edge", isEditing: true }); } },
            { text: "编辑连接", type: "button", isDisabled: (props.edgeState.selectedEdges.length == 1) ? false : true, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "edit_edge", isEditing: true }); } },
            { text: "删除元素", type: "button", isDisabled: (props.nodeState.selectedNodes.length != 0 || props.edgeState.selectedEdges.length != 0) ? false : true, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "delete_selected" + this.flag }); this.flag = (this.flag == 0) ? 1 : 0; } },
            { text: "改变布局", type: "button", isDisabled: false, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "layout", isEditing: true }); } },
            { text: "保存拓扑", type: "button", isDisabled: false, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "save" + this.flag }); this.flag = (this.flag == 0) ? 1 : 0; } },
            { text: "锁定 ", type: "checkbox", isDisabled: false, getStyle: () => { }, callback: () => { this.setState({ edit_mode: "none", isLocked: !this.state.isLocked }); } },
        ]
    }

    componentWillUpdate(nextProps, nextState) {
        this.generateMenuItems(nextProps);
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

    toggleEditing = () => {
        this.setState({
            isEditing: !this.state.isEditing
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
                    toggleEditing={this.toggleEditing}
                    editMode={this.state.edit_mode}
                    onNodesSelect={this.props.selectNodes}
                    onEdgesSelect={this.props.selectEdges}
                    onEdit={this.props.editTopology}
                    onSave={this.props.saveTopology}
                />
                <Console editMode={this.state.edit_mode} isEditing={this.state.isEditing} onConfirm={this.quitEditing} onCancel={this.quitEditing} />
                <RightClickMenu items={this.menuItems} isEditing={this.state.isEditing} isLocked={this.state.isLocked} />
            </div>
        )
    }
};

const mapStateToProps = (storeState) => {
    const nodeList = Object.keys(storeState.topology.datagram.nodes).map(id => storeState.topology.datagram.nodes[id]);
    const edgeList = Object.keys(storeState.topology.datagram.edges).map(id => storeState.topology.datagram.edges[id]);
    const topologyDatagram = {
        nodes: nodeList,
        edges: edgeList
    };
    return {
        datagram: topologyDatagram,
        nodeState: storeState.topology.nodeState,
        edgeState: storeState.topology.edgeState
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        editTopology, // 同步到store
        saveTopology, // 写入数据库
        selectNodes,
        selectEdges
    }, dispatch);
}

const TopologyApp = connect(mapStateToProps, mapDispatchToProps)(Topology);

export default TopologyApp;
